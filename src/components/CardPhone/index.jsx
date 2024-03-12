import "./index.css"

export default function CardPhone({ phone }) {
  
  return (
    <>
      <div className=" border-2 border-borderCard rounded-2xl w-56 bg-card">
        <div className="absolute transform-translate-x-1/2 discountCard">
          <span>{phone.discount}%</span>
          <span>OFF</span>
        </div>
        <div className="mr-2">
          <img
            src={phone.imageURL}
            alt=""
            className="mx-auto w-32 h-56 object-contain"
          />
        </div>

        <div className="text-start px-4 bg-white">
          <h3>{phone.name}</h3>

          <div className="flex gap-4">
            <p>
              R$
              {(parseInt(phone.price) * (parseInt(phone.discount) / 100))
                .toFixed(2)
                .replace(".", ",")}
            </p>
            <span className="line-through">R${phone.price}</span>
          </div>

          <span>
            Save - R$
            {((parseInt(phone.price) * (100 - parseInt(phone.discount))) / 100)
              .toFixed(2)
              .replace(".", ",")}
          </span>
        </div>
      </div>
    </>
  );
}
