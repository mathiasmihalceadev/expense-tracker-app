function HeaderInformation() {
    const userName = JSON.parse(localStorage.getItem('Username'));

    return (
        <div className="py-6">
            <h1 className="text-xl font-semibold">Hello, {userName === '' ? 'user' : userName}!</h1>
            <p className="text-gray-500 text-sm">Track your expenses, start your day right!</p>
        </div>
    )
}

export default HeaderInformation;