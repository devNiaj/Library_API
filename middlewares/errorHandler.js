export const errorHandle = (err, req, res, next) => {
    const status = res.statusCode ? res.statusCode : 500;

    res.status(status).json({message : err.message});
};