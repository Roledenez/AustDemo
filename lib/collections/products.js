Products = new Mongo.Collection('products');



Products.featured = function(){
    var featuredSkus = ['honeymoon-mars','johnny-liftoff','mars-trek'];
    return Products.find({sku : {$in : featuredSkus}})
}
