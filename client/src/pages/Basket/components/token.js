export default function getRandomTokens () {
            const tokens = [
                { name: "Uniswap (UNI)", address: "0x5C69bEe701ef814a2B6a3EDD4B6C58d06b7E3dA1" },
                { name: "Aave (AAVE)", address: "0x7ff3a3a2276f1f6b9579f2f1c465cc0562b2d3c5" },
                { name: "Compound (COMP)", address: "0xc00e94cb662c3520282e6f5717214004a7f26888" },
                { name: "MakerDAO (MKR)", address: "0x9f8e3c5b6f1e8b9d6d4c0f5f9f8416bdb7b1c44b" },
                { name: "Synthetix (SNX)", address: "0xc011a72400e58ec36f3d5e5f7f71f58b1eb3b5f1" },
                { name: "Centrifuge (CFG)", address: "0x9b5e6cde75d74d2097e96a5a7fbbd0d5737c8c4a" },
                { name: "RealT (REALT)", address: "0x56f3e1d8a681f310060c5a63458dbf0c1b3bb2fa" },
                { name: "Flow (FLOW)", address: "0x0" },
                { name: "Goldfinch (GFI)", address: "0xe2f07c1cbbe5c08eea440fc7b30384f9dff3e663" },
                { name: "Axie Infinity (AXS)", address: "0x202a63f68f1d77d96877ff9887de4a5b92bc4e93" },
                { name: "Decentraland (MANA)", address: "0x8f8d51f02316b33f66a24d3b325ea82ccbc17135" },
                { name: "The Sandbox (SAND)", address: "0x5c52c9b90a6c7c04f303f1f46497b7e8c40f5f6a" },
                { name: "Enjin Coin (ENJ)", address: "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c" },
                { name: "Gala Games (GALA)", address: "0x7d1af4a897e4a8a536cbe6ab99c6c3db70b9e2c0" },
                { name: "Solana (SOL)", address: "0x0" },
                { name: "Binance Coin (BNB)", address: "0x0" },
                { name: "Cardano (ADA)", address: "0x0" },
                { name: "Polygon (MATIC)", address: "0x0" },
                { name: "Optimism (OP)", address: "0x4200000000000000000000000000000000000042" },
                { name: "Arbitrum (ARB)", address: "0x5af5e88bafec55fa52f107244c08eaf470041ea8" },
                { name: "Immutable X (IMX)", address: "0xf5b9a9bff75d8e227ae29b2aabf02c65de2b29b2" },
                { name: "Loopring (LRC)", address: "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd" },
                { name: "Monero (XMR)", address: "0x0" },
                { name: "Zcash (ZEC)", address: "0x0" },
                { name: "Dash (DASH)", address: "0x0" },
                { name: "Secret (SCRT)", address: "0x0" },
                { name: "Pirate Chain (ARRR)", address: "0x0" },
                { name: "Bitcoin (BTC)", address: "0x0" },
                { name: "Ethereum (ETH)", address: "0x0" },
                { name: "Yearn Finance (YFI)", address: "0x0bc529c00b9c5a5cc1d2e8d8ef3e7b18e6f6823d" },
                { name: "Aragon (ANT)", address: "0xa117000000f79f1d9b1d2f4b29e1e77f481c0c9b" },
                { name: "DAO Maker (DAO)", address: "0x0d87c0a0848e8a3a9d8f8f05e5f7242f623e7277" }
            ];
        
            const count = Math.floor(Math.random() * 4) + 5; // Random number between 5 and 8
            const shuffled = tokens.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count).map((token) => `${token.name} - ${token.address}`);

        };