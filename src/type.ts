export interface titleType{
    titles:string[]
}
export interface ButtonType{
children:React.ReactNode
onClick?:()=>void
varient:'primary'|'secondary'
}