let baseCache = {
    spotify: {
        listening: false,
        title: "Title",
        artist: "Artist"
    },
    status: {
        general: {
            type: "offline",
            colour: "#747F8D"
        },
        custom: null,
        richPresence: [],
        code: {
            file: null,
            workspace: null
        }
    },
    avatar: "https://cdn.discordapp.com/attachments/777801923050340352/854528104894955540/Untitled235_20210616030629.png"
    };
    async function getCache(cache, client) {
    cache = baseCache;
    const user = await client.users.fetch("869311033351749632", { force: true });
    const stat = user.presence.status;
    if (stat == "invisible" || stat == "offline") {
        cache.status.general.colour = "#747F8D";
        cache.status.general.type = "offline";
    };
    if (stat == "online") {
        cache.status.general.colour = "#57F287";
        cache.status.general.type = "online";
    };
    if (stat == "idle") {
        cache.status.general.colour = "#FEE75C";
        cache.status.general.type = "idle";
    };
    if (stat == "dnd") {
        cache.status.general.colour = "ED4245";
        cache.status.general.type = "dnd";
    };
    cache.avatar = user.displayAvatarURL({ size: 4096, dynamic: true });
    const spotifyFilter = user.presence.activities.filter(activity => activity.type == "LISTENING");
    const customStatusFilter = user.presence.activities.filter(activity => activity.type == "CUSTOM_STATUS");
    const codeStatus = user.presence.activities.filter(activity => activity.applicationID == "383226320970055681");
    const otherStatus = user.presence.activities.filter(activity => activity.type !== "CUSTOM_STATUS" && activity.type !== "LISTENING" && activity.applicationID !== "383226320970055681");
    if (spotifyFilter.length == 0) cache.spotify.listening = false;
    else {
        cache.spotify.listening = true;
        cache.spotify.title = spotifyFilter[0].details;
        cache.spotify.artist = spotifyFilter[0].state;
    };
    if (customStatusFilter.length == 0) cache.status.custom = null;
    else {
        cache.status.custom = customStatusFilter[0].state;
    };
    if (codeStatus.length == 0) {
        cache.status.code.file = null;
        cache.status.code.workspace = null;
    } else {
        var file = null;
        var workspace = codeStatus[0].state;
        if (workspace !== null) {
            workspace = codeStatus[0].state.split(" ");
            workspace.shift();
            cache.status.code.workspace = workspace.join(" ");
        };
        if (codeStatus[0].details.startsWith("Editing")) {
            file = codeStatus[0].details.split(" ");
            file.shift();
            cache.status.code.file = file.join(" ");
        } else {
            cache.status.code.file = "Idling";
        };
    };
    cache.status.richPresence = [];
    otherStatus.forEach(status => {
        const obj = {
            name: status.name,
            topFieldDetails: status.details,
            topFieldState: status.state,
            timestamps: status.timestamps
        }
        cache.status.richPresence.push(obj);
    });
    return cache;
    };
    export { getCache, baseCache }