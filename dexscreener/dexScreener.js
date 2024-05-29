const url = 'https://api.dexscreener.io/latest/dex/search?q=ETH%20USDT';

// Function to fetch search results
async function fetchSearchResults() {
    try {
        // Make the GET request to the API
        const response = await fetch(url);

        // Check if the request was successful
        if (response.ok) {
            const data = await response.json();
            console.log(data);

            // Extract relevant details from the response
            if (data.pairs && data.pairs.length > 0) {
                data.pairs.forEach(pair => {
                    // Check if the pair is on the Ethereum network
                    if (pair.chainId === 'ethereum') {
                        const {
                            dexId,
                            url,
                            pairAddress,
                            baseToken,
                            quoteToken,
                            priceNative,
                            priceUsd,
                            volume,
                            priceChange,
                            liquidity,
                            fdv,
                            pairCreatedAt,
                        } = pair;

                        console.log(`DEX: ${dexId}`);
                        console.log(`URL: ${url}`);
                        console.log(`Pair Address: ${pairAddress}`);
                        console.log(`Base Token: ${baseToken.symbol} (${baseToken.name})`);
                        console.log(`Quote Token: ${quoteToken.symbol} (${quoteToken.name})`);
                        console.log(`Price (Native): ${priceNative}`);
                        console.log(`Price (USD): $${priceUsd}`);
                        console.log(`Volume:`, volume);
                        console.log(`Price Change:`, priceChange);
                        console.log(`Liquidity:`, liquidity);
                        console.log(`Fully Diluted Valuation (FDV): ${fdv}`);
                        console.log(`Pair Created At: ${new Date(pairCreatedAt).toLocaleString()}`);
                        console.log('-------------------------');
                    }
                });
            } else {
                console.log('No pairs found for the given query.');
            }
        } else {
            console.error(`Error: ${response.status}`);
        }
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

// Call the function to fetch search results
fetchSearchResults();
