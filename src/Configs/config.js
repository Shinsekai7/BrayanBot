import { Config } from "../Modules/Structures/Handlers/Config.js";
import path from "path";

const __dirname = path.resolve();

const ConfigType = {
    Settings: {
        Token: String,
        UseMentionPrefix: Boolean,
        Prefix: [String] || String,
        IgnoreBots: Boolean,
        DevMode: Boolean,
        Verbose: Boolean,
        TagForInfo: Boolean,
    },
    Branding: {
        Name: String,
        Color: String,
        Logo: String,
        Link: String,
    },
    ActivityStatus: {
        Mode: String,
        Activities: [{
            Type: "PLAYING" | "LISTENING" | "WATCHING" | "STREAMING",
            Text: String,
            URL: String,
        }],
        Order: String,
        Interval: Number,
    }
}

const defaultConfig = {
    Settings: {
        Token: "Your-Bot-Token",
        UseMentionPrefix: true,
        Prefix: ["-"],
        "~0": "Weather bots can use commands or not.",
        IgnoreBots: false,
        TagForInfo: true,
        "~1": "Development options",
        DevMode: false,
        Verbose: false,
    },
    "~l0": "Empty Line",
    Branding: {
        Name: "BrayanBot",
        Color: "#2f3136",
        Link: "https://brayanbot.dev",
        Logo: "https://avatars.githubusercontent.com/u/99198112",
    },
    "~l1": "Empty Line",
    ActivityStatus: {
        "~0": "Available modes: online | idle | dnd | offline",
        Mode: "online",
        Activities: [{
            Type: "PLAYING",
            Text: "discord.js",
        }, {
            Type: "STREAMING",
            Text: "BrayanBot.dev",
            URL: "https://brayanbot.dev"
        }, {
            Type: "LISTENING",
            Text: "for help"
        }, {
            Type: "WATCHING",
            Text: "{guild-members} members."
        }]
    }
}

export default new Config(path.join(__dirname, "./data/config.yml"), defaultConfig)

export { ConfigType }