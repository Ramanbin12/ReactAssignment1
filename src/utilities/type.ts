export interface titleType{
titles:string[]
    }

export interface ButtonType{
children:React.ReactNode
onClick?:()=>void
variant:'primary'|'secondary'
}