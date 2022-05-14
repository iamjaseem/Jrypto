import { useCallback, useContext, useEffect,useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { TransactionContext } from '../context/TransactionContext';
const COMMANDS = {
    conn_wallet : 'Connect Wallet',
    send_Transaction : 'Send-Transaction',
    
}
const alankey='bd222944fe2bf937ea90a5be89e9a7ae2e956eca572e1d8b807a3e2338fdd0dc/stage';
export default function useAlan(){

    const [alanInstance,setAlanInstance] = useState()
    const {connectWallet,sendTransaction} = useContext(TransactionContext)
    
    
    const connwallet=useCallback(()=>{
        alanInstance.playText("Connecting The Wallet,choose your account and click next")
        connectWallet(true)
    },[alanInstance,connectWallet])

    const sendTrans=useCallback(()=>{
        alanInstance.playText("Sending the Transaction, Please confirm and wait, Thanks")
        sendTransaction(true)
    },[alanInstance,connectWallet])
    
    
    

    useEffect(() => {
        window.addEventListener(COMMANDS.conn_wallet,connwallet)
        window.addEventListener(COMMANDS.send_Transaction,sendTrans)
        

        return ()=>{
            window.removeEventListener(COMMANDS.conn_wallet,connwallet)
            window.removeEventListener(COMMANDS.send_Transaction,sendTrans)
            
        }

    },[connwallet,sendTrans])
    useEffect(()=>{
        if(alanInstance !=null) return
        setAlanInstance(
        alanBtn({
         key: alankey,
         onCommand:({command}) =>{
             window.dispatchEvent(new CustomEvent(command))
            
         }
     })
    )
},[])
return null
}