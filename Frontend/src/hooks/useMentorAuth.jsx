import { useContext } from "react"
import { mentorContext } from "../context/mentorContext"

export const UseMentorAuth = ()=>{
    const context = useContext(mentorContext)
    if(!context){
        return console.log('the mentor context should be containing the parent component')
    }
    return context
}