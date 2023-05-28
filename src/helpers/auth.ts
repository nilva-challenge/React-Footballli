import Cookies from 'universal-cookie';

const storeLoginToken = async (token: string, days: number = 10) => {
    // const cookies = new Cookies();

    await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
    })

    // cookies.set('shopy_token', token,
    //     {
    //         path: '/',
    //         maxAge: (days * 24 * 60 * 3600),

    //     }
    // );
}

const removeLoginToken = async () => {
    // for cookie no httponly

    // const cookie = new Cookies();
    // cookie.remove('shopy_token')


    //for cookie httponly

    await fetch('/api/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })

}

export { storeLoginToken, removeLoginToken };

