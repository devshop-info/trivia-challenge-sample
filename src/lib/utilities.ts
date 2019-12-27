/*
*  File:            utilities.scss
*  Description:     This files holds misc utility functions 
*  Author:          RK
*/

export function parseHTMLString(htmlString:string){
    return {__html: htmlString};
}