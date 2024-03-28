import {View, Text } from "react-native"
import Login from "./loginScreen"
import Register from "./registerScreen"
import AppNavigation from "../navigation/appNavigation"
import LoadScreen from "./loadScreen"
import { useEffect, useState } from "react"

const Index = () => {

    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
        }, 1000);
  
      return () => clearTimeout(timer);
    }, []);

    return(
        isLoading ? <LoadScreen/> : <AppNavigation/>
    )
}

export default Index
