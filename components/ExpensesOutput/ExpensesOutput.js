import {View,StyleSheet,Text} from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import {GlobalStyles} from '../../constants/style';



function ExpensesOutput({expenses,expensesPeriod,fallbackText}) {


    let content=<Text style={styles.infoText}>{fallbackText}</Text>
    if(expenses.length > 0) {
        content=<ExpensesList expenses={expenses} />
    }
    return <View style={styles.container}>
        <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
        {content}
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
    },

    infoText:{
        color:'white',
        textAlign:'center',
        marginTop:32,
        fontSize:16
    }
})