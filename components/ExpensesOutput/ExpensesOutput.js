import {View,StyleSheet} from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import {GlobalStyles} from '../../constants/style';



function ExpensesOutput({expenses,expensesPeriod}) {
    return <View style={styles.container}>
        <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
        <ExpensesList expenses={expenses} />
    </View>
}

export default ExpensesOutput;

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:24,
        paddingBottom:0,
        padding:24,
        backgroundColor: GlobalStyles.colors.primary700
    }
})