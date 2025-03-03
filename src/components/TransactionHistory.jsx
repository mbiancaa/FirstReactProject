import TransactionRow from "./TransactionRow";

const TransactionHistory = ({ items }) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>

                {items.map((item) => {
                    return <TransactionRow
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                    />
                })}

            </tbody>
        </table>

    );
}

export default TransactionHistory;