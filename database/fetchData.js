const baseUrl = process.env.BASE_URL

export default getData = async(url,token) =>{
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    })
    const data = await res.json()
    return data
}

export default postData = async(url, post, token) =>{
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })
    const data = await res.json()
    return data
}

export default putData = async(url, post, token) =>{
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })
    const data = await res.json()
    return data
}

export default patchData = async(url, post, token) =>{
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })
    const data = await res.json()
    return data
}

export default deleteData = async(url, token) =>{
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
    const data = await res.json()
    return data
}