export const fetchdata = async () => {
    try {
        const response = await fetch("https://34.66.149.130/users")
        const data = await response.toJson();
        return data;
    }
    catch (e) {
        console.log(e)
    }

}