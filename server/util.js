const responder = ({res, success, message, data}) => {
return res.json({
    success: success || false,
    message: message || null,
    data: data || null
});
}

export { responder };