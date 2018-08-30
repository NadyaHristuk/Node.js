module.exports = {
    bodyMaker(data, status = 200, errors = [], warnings = []){
        return {
            data,
            status,
            errors,
            warnings
        }
    }
}