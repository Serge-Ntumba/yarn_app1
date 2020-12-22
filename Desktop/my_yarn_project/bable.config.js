module.export = {
    "presets": [
        "@babel/react", [
            "@babel/preset-env",
            {
                "module": false,
                "useBuildIns": "usage",
                "corejs": 3,
            },
        ],
    ],
};

