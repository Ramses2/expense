import { FlatList } from "react-native";


function renderExpenseItem(itemData) {
    return 
}

function ExpensesList({expenses}) {
    return <FlatList data={expenses} renderItem={renderExpenseItem}/>
}


export default ExpensesList;