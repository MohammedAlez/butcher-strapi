module.exports= {
    async afterCreate(event){
        const {result} = event 
        console.log(result);
        try{
            await strapi.plugin('email').service('email').send({
                to: 'mohammed.alez@yahoo.com',
                from: 'orders@select-beef.com',
                subject: 'New Order',
                text: 'there is a new order ',
            });
        }catch(e){
            console.log("email has not been sent")
            console.log(e)
        }
    }
}