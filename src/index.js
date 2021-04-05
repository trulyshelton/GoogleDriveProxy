import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Menu as MenuIcon, Search, ArrowBack, NavigateNext, CloudDownload, FavoriteBorder, Favorite} from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";
import {lightBlue} from "@material-ui/core/colors";
import {fade} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import LinearProgress from "@material-ui/core/LinearProgress";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Tooltip from "@material-ui/core/Tooltip";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import VisibilitySensor from 'react-visibility-sensor';

const api = "https://api.sheltonhuang.me/GoogleDriveProxy/";

const isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
const folderMimeType = 'application/vnd.google-apps.folder';
const folderImg = 'folderImg.jpg';
const failOverImg = 'imgNotFound.jpg';

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: lightBlue["700"],
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    grow: {
        flexGrow: 1,
    },
    conditionGrow: {
        [theme.breakpoints.up('sm')]: {
            flexGrow: 1,
        }
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: 0,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 600,
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: 'calc(100% - 50px)'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%'
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        cursor: 'pointer'
    },
    cardContent: {
        flexGrow: 1,
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    center: {
        textAlign: 'center',
    }
}));

const getOrderBy = () => JSON.parse(localStorage.getItem("orderBy") || '{"key":"createdTime","order":" desc"}');
const putOrderBy = (orderBy) => localStorage.setItem("orderBy", JSON.stringify(orderBy));

const viewed = (id) => {
    let recentViews = JSON.parse(localStorage.getItem("recentViews") || "[]");
    let position = recentViews.indexOf(id);
    if (position > -1) recentViews.splice(position, 1);
    recentViews.unshift(id);
    recentViews.splice(100);
    localStorage.setItem("recentViews", JSON.stringify(recentViews));
};

const getRecents = () => JSON.parse(localStorage.getItem("recentViews") || "[]");
const addHistory = (item) => localStorage.setItem("history", JSON.stringify([...getHistory(), item]));
const popHistory = () => {
    let history = getHistory();
    if (history.length < 1) return null;
    let res = history.pop();
    localStorage.setItem("history", JSON.stringify(history));
    return res;
};
const getHistory = () => JSON.parse(localStorage.getItem("history") || "[\"folder/root\"]");

function getReadableFileSizeString(fileSizeInBytes) {
    let i = -1, byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
    do { fileSizeInBytes = fileSizeInBytes / 1024; i++; } while (fileSizeInBytes > 1024);
    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
}

const getToken = ()=> localStorage.getItem("token");
let cacheItems = [];

function App() {
    const classes = useStyles();
    const inputRef = React.createRef();
    const iniHistory = getHistory();

    const [loginState, setLoginState]  = React.useState({loggedIn: !!getToken(), open: false, submitting: false});
    const [searchDisabled, setSearchDisabled] = React.useState(!getToken());
    const [nextPage, setNextPage] = React.useState({nextPageToken: null, opts: null});
    const [items, setItems] = React.useState([]);
    const [folders, setFolders] = React.useState([]);
    const [history, setHistory] = React.useState(iniHistory);
    const [favorites, setFavorites] = React.useState([]);
    const [orderby, setOrderby] = React.useState(getOrderBy());
    const [view, setViewRaw] = React.useState({open: false});
    const setView = (obj) => {
        document.title = obj.open ? obj.name : "GoogleDriveProxy";
        setViewRaw(obj);
    };

    let previous_state =  new URLSearchParams();
    if (iniHistory.length > 1) previous_state.set('q', iniHistory[iniHistory.length-1]);

    const hashEventResponder = (e) => {
        const params = new URLSearchParams(window.location.hash.substr(1));
        const queryParam = params.get('q'), fileParam = params.get('f');
        const newParams = new URLSearchParams();
        newParams.set('q', queryParam ? queryParam : 'folder/root');
        if (fileParam) newParams.set('f', fileParam);

        let oB = getOrderBy();
        let orderByQuery = new URLSearchParams({"orderBy":oB.key + oB.order}).toString();
        if (previous_state.get('q') !== newParams.get('q')) {
            if (e && e.type !== 'rewind') {
                history.push(previous_state.get('q'));
                addHistory(previous_state.get('q'));
            }

            loadResource({value: newParams.get('q') + "?" + orderByQuery});
        } else if (e && e.force) {
            loadResource({value: newParams.get('q') + "?" + orderByQuery});
        }

        if (fileParam) {
            accessModal({open: true, id: fileParam});
        } else {
            setView({open: false});
        }
        window.history.replaceState({}, '', '#' + newParams.toString());
        previous_state = newParams;
    };

    const rewind = () => {
        let params = new URLSearchParams(window.location.hash.substr(1));
        params.set('q', history.pop());
        popHistory();
        window.history.replaceState({}, '', '#' + params.toString());
        window.dispatchEvent(new Event("rewind"));
    };

    const loadResource = (opts) => {
        setSearchDisabled(true);
        return fetch(`${api}${opts.value}`,  {headers: {Authorization: getToken(), 'Content-Type': 'application/json'}, ...(opts.opts ? opts.opts : {})})
            .then(resp => resp.json())
            .then((res) => {
                cacheItems = res.files.filter(el => el.mimeType !== folderMimeType);
                setItems(cacheItems);
                setFolders(res.files.filter(el => el.mimeType === folderMimeType));
                if (res.nextPageToken) {
                    setNextPage({nextPageToken: res.nextPageToken, opts: opts})
                } else {
                    setNextPage({nextPageToken: null, opts: null})
                }
                return res;
            })
            .then((res) => opts.postProcess ? opts.postProcess(res) : null)
            .catch(alert)
            .finally(() => {
                window.scrollTo(0, 0);
                setSearchDisabled(false);
            });
    };

    const searchTrigger = (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
        let params = new URLSearchParams(window.location.hash.substr(1));
        params.set('q', inputRef.current.value ? `query/${inputRef.current.value}` : 'folder/root');
        window.history.replaceState({}, '', '#' + params.toString());
        window.dispatchEvent(new Event("myhashchange"));
    };


    const accessModal = (state) => {
        if (state.name) {
            setView(state);
        } else {
            let item = cacheItems.find(x => x.id === state.id);
            if (item) {
                setView({...state, name: item.name});
                viewed(state.id);
            } else {
                fetch(`${api}file`, {
                        body: JSON.stringify({files: [state.id]}),
                        method: 'POST',
                        headers: {'Authorization': getToken(), 'Content-Type': 'application/json'}
                    })
                    .then(resp => resp.json())
                    .then(res => {
                        if (res.files.length === 1) {
                            setView({...state, name: res.files[0].name});
                            viewed(state.id);
                        }
                    })
                    .catch(console.log);
            }
        }
    };

    const loginTrigger = (ev) => {
        if (ev.key === 'Enter' && loginState.username && loginState.password) login();
    };

    const login = () => {
        setLoginState({...loginState, submitting: true});
        fetch(`${api}auth`, {
            body: JSON.stringify({username: loginState.username, password: loginState.password}),
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        })
            .then(resp => {
                if (resp.status === 401) {
                    alert("Incorrect username or password.");
                    throw resp;
                } else if (resp.status === 200) {
                    return resp.json();
                } else {
                    alert("Unknown response " + resp.status + " from server.");
                    throw resp;
                }
            })
            .then(resp => {
                localStorage.setItem('token', resp.token);
                afterLogin();
                setLoginState({loggedIn: true, open: false, submitting: false});
            })
            .catch(err => {
                console.log(err);
                setLoginState({...loginState, submitting: false});
            })
    };

    const specialLogin = () => {
        localStorage.setItem('token', loginState.password);
        setLoginState({loggedIn: true, open: false, submitting: false});
        afterLogin()
    };

    const logout = () => {
        inputRef.current.value = "";
        setLoginState({loggedIn: false, open: false, submitting: false});
        setItems([]); setFolders([]); setFavorites([]); setHistory([]); setSearchDisabled(true);
        localStorage.removeItem('token');
        localStorage.removeItem('history');
        handleMenuClose();
    };

    const afterLogin = () => {
        hashEventResponder();
        fetch(`${api}favorite`, {headers: {Authorization: getToken()}})
            .then(resp => resp.json())
            .then((res) => setFavorites(res.files))
            .catch(alert);
    };

    useEffect(() => {
        window.addEventListener("hashchange", hashEventResponder, false);
        window.addEventListener("myhashchange", hashEventResponder, false);
        window.addEventListener("rewind", hashEventResponder, false);
       if (getToken()) afterLogin();
    // eslint-disable-next-line
    }, []);


    //modal

    const updateFavorite = (id) => {
        let isAdd = !favorites.includes(id);
        fetch(`${api}favorite/${id}`, {headers: {Authorization: getToken()}, method: isAdd ? 'PUT' : 'DELETE'})
            .then(async resp => {
                if (resp.status === 204)  {
                    if (isAdd) {
                        if (!favorites.includes(id)) {
                            setFavorites([id, ...favorites])
                        }
                    } else {
                        setFavorites(favorites.filter(x => x !== id));
                    }
                } else if (resp.status === 507) {
                    throw (await resp.json()).errorMessage;
                } else {
                    throw resp.json();
                }
            })
            .catch(alert)
            .finally(handleMenuClose);
    };

    const fetchRecent = () => {
        let recentViews = getRecents();
        if (recentViews.length) {
            loadResource({
                value: "file",
                opts: {
                    body: JSON.stringify({files: recentViews}),
                    method: 'POST',
                }}).then(handleMenuClose)
        }
    };

    const changeReverse = (e) => {
        if (e.target.innerText && e.target.innerText.includes('Order By')) {
            setOrderby({...orderby, order: orderby.order.length ? "" : " desc"});
        }
    };

    useEffect(() => {
        putOrderBy(orderby);
        let orderchangeEvent = new Event("myhashchange");
        orderchangeEvent.force = true;
        window.dispatchEvent(orderchangeEvent);
    }, [orderby]);

    const handleModalClick = (e) => {
        let el = e.target, id, name, mimetype;
        do {
            el = el.parentNode;
            id = el.attributes.getNamedItem('data-id') ? el.attributes.getNamedItem('data-id').value : null;
            name = el.attributes.getNamedItem('data-name') ? el.attributes.getNamedItem('data-name').value : null;
            mimetype = el.attributes.getNamedItem('data-mimetype') ? el.attributes.getNamedItem('data-mimetype').value : null;
        } while (el.parentNode && !(id && name && mimetype));

        if (e.target.tagName === 'svg' || e.target.tagName === 'path') {  // is favorite click
            updateFavorite(id);
        } else {
            let params = new URLSearchParams(window.location.hash.substr(1));
            if (mimetype === folderMimeType) {
                params.set('q', `folder/${id}`);
                window.history.replaceState({}, '', '#' + params.toString());
                window.dispatchEvent(new Event("myhashchange"));
            } else {
                params.set('f', id);
                window.history.replaceState({}, '', '#' + params.toString());
                window.dispatchEvent(new Event("myhashchange"));
            }
        }
    };

    const handleModalClose = () => {
        let params = new URLSearchParams(window.location.hash.substr(1));
        params.delete('f');
        window.history.replaceState({}, '', '#' + params.toString());
        window.dispatchEvent(new Event("myhashchange"));
    };


    //menu
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event) => setAnchorEl(event.currentTarget);

    const handleMenuClose = () => setAnchorEl(null);



    return (
        <>
            <CssBaseline />
                <AppBar position="sticky" className={classes.appBar}>
                    <Toolbar>
                        {loginState.loggedIn ?
                            (<IconButton color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}><MenuIcon/></IconButton>) :
                            ( <Button  variant="contained"  onClick={() => setLoginState({...loginState, open: true})} >Login</Button>)
                        }
                        <Menu
                            id="simple-menu" keepMounted
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={() => {
                                window.history.replaceState({}, '', '#');
                                window.dispatchEvent(new Event("myhashchange"));
                            }} >Home</MenuItem>
                            <MenuItem onClick={() => loadResource({
                                value: "favorite?alt=content",
                                postProcess: (r) => setFavorites(r.files.map(x => x.id)) })} >Favorites</MenuItem>
                            <MenuItem onClick={changeReverse}>
                                <form className={classes.form} autoComplete="off">
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="orderby">Order By{orderby.order.length ? ' ⬇️':' ⬆️'}</InputLabel>
                                        <Select
                                            value={orderby.key}
                                            onChange={(event) => setOrderby({...orderby, key: event.target.value})}
                                            inputProps={{ name: 'Order By', id: 'orderby', }}
                                        >
                                            <MenuItem value={'createdTime'}>Create Time</MenuItem>
                                            <MenuItem value={'name'}>Name</MenuItem>
                                            <MenuItem value={'quotaBytesUsed'}>Size</MenuItem>
                                        </Select>
                                    </FormControl>
                                </form>
                            </MenuItem>
                            <MenuItem onClick={fetchRecent} >Recently Viewed</MenuItem>
                            <MenuItem onClick={logout} >Logout</MenuItem>
                        </Menu>

                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <Search />
                            </div>
                            <form action="." onSubmit={searchTrigger}>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'Search keywords' }}
                                    inputRef={inputRef}
                                    disabled={searchDisabled}
                                    type='search'
                                />
                                <IconButton disabled={searchDisabled} onClick={searchTrigger} color='inherit'><NavigateNext/></IconButton>
                            </form>
                        </div>
                        <div className={classes.grow} />
                        <IconButton color="inherit" disabled={history.length < 1} onClick={rewind}><ArrowBack/></IconButton>
                    </Toolbar>
                    {searchDisabled && loginState.loggedIn && <LinearProgress variant="query" />}
                </AppBar>
            <main>
                <Container className={classes.cardGrid} maxWidth="lg" >
                    <Grid container spacing={4}>
                        {folders.map(card => (
                            <Grid item key={card['id']} xs={12} sm={6} md={3}  >
                                <Card className={classes.card} data-id={card.id} data-name={card.name} data-mimetype={card.mimeType} style={{position: 'relative'}}>
                                    <CardMedia className={classes.cardMedia} title={card.name} onClick={handleModalClick} image={folderImg} />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="subtitle2">{card.name}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" onClick={handleModalClick}>View</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                        {items.map(card => (
                            <Grid item key={card['id']} xs={12} sm={6} md={3}  >
                                <Card className={classes.card} data-id={card.id} data-name={card.name} data-mimetype={card.mimeType} style={{position: 'relative'}}>
                                    <CardMedia className={classes.cardMedia} title={card.name} onClick={handleModalClick} image={card.thumbnailLink || failOverImg} />
                                    <IconButton size="small" color="primary" onClick={handleModalClick} style={{ position: 'absolute', top: '17px', right: '20px' }}>
                                        {favorites.includes(card.id) ? <Favorite style={{fill: '#ea062c'}}/> : <FavoriteBorder style={{fill: '#ea062c'}}/>}
                                    </IconButton>
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="subtitle2">{card.name}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" onClick={handleModalClick}>View</Button>
                                        <Tooltip title={getReadableFileSizeString(parseInt(card.size))} placement="top">
                                            <Button size="small" color="primary" href={`${api}file/${card.id}`} download={card.name} target="_blank">
                                            Download
                                            </Button>
                                        </Tooltip>
                                        {isMac &&
                                        <Button size="small" color="primary" href={`iina://open?url=${encodeURI(api+'file/'+card.id)}`}>
                                            <span role="img" aria-label="play in iina">▶️IINA</span>
                                        </Button>}
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    {nextPage.nextPageToken && (
                        <VisibilitySensor intervalCheck={false} intervalDelay={750} scrollCheck={true} scrollDelay={250} partialVisibility={true} onChange={(isVisible => {
                            if (!isVisible) return;
                            setSearchDisabled(true);
                            console.log(nextPage);
                            fetch(`${api}${nextPage.opts.value}&${new URLSearchParams({"nextPageToken":nextPage.nextPageToken}).toString()}`,  {headers: {Authorization: getToken(), 'Content-Type': 'application/json'}, ...(nextPage.opts.opts ? nextPage.opts.opts : {})})
                                .then(resp => resp.json())
                                .then((res) => {
                                    setItems(cacheItems = items.concat(res.files.filter(el => el.mimeType !== folderMimeType)));
                                    setFolders(folders.concat(res.files.filter(el => el.mimeType === folderMimeType)));
                                    if (res.nextPageToken) {
                                        setNextPage({...nextPage, nextPageToken: res.nextPageToken})
                                    } else {
                                        setNextPage({nextPageToken: null, opts: null})
                                    }
                                    return res;
                                })
                                .catch(alert)
                                .finally(() => {
                                    setSearchDisabled(false);
                                });
                        })}>
                            <Typography className={classes.center}>...loading more...</Typography>
                        </VisibilitySensor>
                    )}
                </Container>
            </main>
            <Dialog open={view.open} onClose={handleModalClose} aria-labelledby="view screen" fullWidth maxWidth="lg">
                {view.open &&
                <Toolbar>
                    <Typography noWrap={true} variant="h6" className={classes.title}>
                        {view.name}
                    </Typography>
                    <div className={classes.grow} />
                    <IconButton size="small" color="primary" onClick={() => updateFavorite(view.id)} style={{marginRight: '4px'}} >
                        {favorites.includes(view.id) ? <Favorite style={{fill: '#ea062c'}}/> : <FavoriteBorder style={{fill: '#ea062c'}}/>}
                    </IconButton>
                    <IconButton size="small" color="primary" href={`${api}file/${view.id}`} download={view.name} target="_blank">
                        <CloudDownload/>
                    </IconButton>
                </Toolbar>
                }
                {view.open && <video src={`${api}file/${view.id}`} controls={true} autoPlay />}
            </Dialog>
            <Dialog open={loginState.open} onClose={() => setLoginState({...loginState, open: false})} aria-labelledby="login window" fullWidth maxWidth="xs">
                <DialogTitle>Login to GoogleDriveProxy</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To use this app, please enter your credential here.
                    </DialogContentText>
                    <form autoComplete="off" action=".">
                        <TextField autoFocus required fullWidth margin="normal"
                             type="text" label="Username" disabled={loginState.submitting} onKeyPress={loginTrigger} inputProps={{ autoCapitalize: 'off', autoCorrect: 'off' }}
                                   onChange={(evt) => setLoginState({...loginState, username: evt.target.value})}
                        />
                        <TextField required fullWidth margin="normal"
                             type="password" label="Password" disabled={loginState.submitting} onKeyPress={loginTrigger}
                                   onChange={(evt) => setLoginState({...loginState, password: evt.target.value})}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button style={{position: 'absolute', left: "10px"}} onClick={specialLogin} disabled={!loginState.password}/>
                    <Button disabled={!loginState.username || !loginState.password || loginState.submitting} onClick={login} color="primary">Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
