// import React, { useContext, useEffect, useState } from "react";
// import LayOut from "../../Components/LayOut/LayOut";
// import { db } from "../../Utility/firebase";
// import classes from "./Orders.module.css";
// import {
//   collection,
//   doc,
//   query,
//   orderBy,
//   onSnapshot,
// } from "firebase/firestore";
// import { DataContext } from "../../Components/DataProvider/DataProvider";
// import ProductCard from "../../Components/Product/ProductCard";
// function Orders() {
//   const [{ user }, dispatch] = useContext(DataContext);
//   const [order, setOrder] = useState([]);
//   useEffect(() => {
//     if (user) {
//       // Assuming 'db' is your Firestore instance and 'user' is already defined

//       const ordersRef = collection(doc(db, "users", user.uid), "orders");
//       const q = query(ordersRef, orderBy("created", "desc"));

//       onSnapshot(q, (snapshot) => {
//         const orders = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           data: doc.data(),
//         }));

//         setOrder(orders); // Assuming setOrder is a state setter function
//       });
//     } else {
//     }
//   }, [user]);
//   return (
//     <LayOut>
//       <section className={classes.container}>
//         <div className={classes.orders_container}>
//           <h1>Your Orders</h1>
//           <div>
//             {order.map((eachOrder, i) => {
//               return (
//                 <div key={i}>
//                   <hr />
//                   <p>order ID:{eachOrder?.id}</p>
//                   {eachOrder?.data?.map((order) => (
//                     <ProductCard flex={true} product={order} key={order.id} />
//                   ))}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </LayOut>
//   );
// }

// export default Orders;
import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { db } from "../../Utility/firebase";
import classes from "./Orders.module.css";
import {
  collection,
  doc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";

function Orders() {
  const [{ user, basket }] = useContext(DataContext); // No need for 'dispatch' if not used
  const [order, setOrder] = useState([]);

  useEffect(() => {
    if (user) {
      const ordersRef = collection(doc(db, "users", user.uid), "orders");
      const q = query(ordersRef, orderBy("created", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const orders = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setOrder(orders);
      });

      return () => unsubscribe(); // Cleanup the listener on unmount
    }
  }, [user]); // Add 'user' as a dependency

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h1>Your Orders</h1>
          {order?.length === 0 && (
            <div style={{ padding: "20px" }}>you don't have orders yet</div>
          )}
          <div>
            {order.length > 0 ? (
              order.map((eachOrder, i) => (
                <div key={i}>
                  <hr />
                  <p>Order ID: {eachOrder.id}</p>
                  {/* Assuming 'products' is an array in each order */}
                  {eachOrder.data.basket?.map((orderProduct) => (
                    <ProductCard
                      flex={true}
                      product={orderProduct}
                      key={orderProduct.id}
                    />
                  ))}
                </div>
              ))
            ) : (
              <p>No orders found</p>
            )}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
