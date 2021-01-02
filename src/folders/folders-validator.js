const NO_ERRORS = null
function getFolderValidationError({ name }){
    if(name.length < 1 || name.length > 10){
        return { error: {
            message: `${name} has to be greater than one and less than 10 character`
        }}
    }
    return NO_ERRORS
}

module.exports = {
    getFolderValidationError,
}