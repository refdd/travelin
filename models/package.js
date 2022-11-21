class Package {
    constructor(
        id,
        type,
        imageUrl,
        days,
        cpuntry, 
        title,
        start,
        desc,
        price,
        offer,
      ) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.imageUrl = imageUrl;
        this.desc = desc;
        this.price = price;
        this.start = start;
        this.cpuntry = cpuntry;
        this.days = days;
        this.offer = offer;

      }
}
export default Package;
