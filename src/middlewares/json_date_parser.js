const parseDate = (req, resp, next) => {
    const { fecha } = req.body
    if (fecha) {
        var num = Date.parse(fecha);
        var fechaAsDate = new Date(num)
        req.body = {
            ...req.body,
            fecha: fechaAsDate,
        };
    }
    next();
}

module.exports = parseDate; 