import { FlatList, StyleSheet, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";


function renderExpenseItem(itemData) {
    
    // return <Text>{itemData.item.description}</Text>
    return <ExpenseItem {...itemData.item}/>
}

function ExpensesList({ expenses }) {
    return <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
    />
}

export default ExpensesList;

const styles = StyleSheet.create({

})