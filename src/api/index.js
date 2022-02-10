export const getDomainNFT = (domain) => {
    const controller = new AbortController();
    const signal = controller.signal;
    const promise = new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`https://poap.moonlabs.xyz/api/domain_picture?domain=${domain}`, {
                method: "get",
                signal,
            });
            const data = await response.json();
            if(data["status"]) {
                resolve(data["data"]);
            } else {
                reject(Error(data["message"]));
            }
        } catch (error) {
            reject(error);
        }
    });
    promise.cancel = () => controller.abort();
    return promise;
}
