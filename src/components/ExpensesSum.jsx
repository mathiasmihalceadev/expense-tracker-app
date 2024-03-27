function ExpensesSum({total}) {
    return (
        <div className="text-center bg-gradient-to-br from-gray-950 to-gray-800 py-8 rounded-lg">
            <p className="text-gray-300">Spent so far</p>
            <h2 className="text-3xl text-white font-bold">{total} LEI</h2>
        </div>

    )
}

export default ExpensesSum;