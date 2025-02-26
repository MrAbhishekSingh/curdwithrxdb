// // import React, { useEffect, useState } from "react";
// // import { getDatabase } from "./db";
// // import { v4 as uuidv4 } from "uuid";
// // import "./App.css";
// // import '@babel/polyfill';


// // function App() {
// //   const [db, setDb] = useState(null);
// //   const [businesses, setBusinesses] = useState([]);
// //   const [articles, setArticles] = useState([]);
// //   const [newBusinessName, setNewBusinessName] = useState("");
// //   const [newArticle, setNewArticle] = useState({
// //     name: "",
// //     qty: "",
// //     selling_price: "",
// //     business_id: "",
// //   });

// //   console.log('articles', articles);

// //   // Initialize database and subscribe to changes
// //   useEffect(() => {
// //     async function setupDb() {
// //       const database = await getDatabase();
// //       setDb(database);

// //       // Subscribe to businesses
// //       database.businesses.find().$.subscribe((docs) => {
// //         setBusinesses(docs.map((doc) => doc.toJSON()));
// //       });

// //       // Subscribe to articles
// //       database.articles.find().$.subscribe((docs) => {
// //         setArticles(docs.map((doc) => doc.toJSON()));
// //       });
// //     }
// //     setupDb();
// //   }, []);

// //   // Handle adding a new business
// //   const handleAddBusiness = async () => {
// //     if (!newBusinessName || !db) return;
// //     try {
// //       await db.businesses.insert({
// //         id: uuidv4(),
// //         name: newBusinessName,
// //       });
// //       setNewBusinessName(""); // Clear input after submission
// //     } catch (error) {
// //       console.error("Error adding business:", error);
// //     }
// //   };

// //   // Handle adding a new article
// //   const handleAddArticle = async () => {
// //     if (
// //       !newArticle.name ||
// //       !newArticle.qty ||
// //       !newArticle.selling_price ||
// //       !newArticle.business_id ||
// //       !db
// //     ) {
// //       alert("Please fill all article fields!");
// //       return;
// //     }
// //     try {
// //       await db.articles.insert({
// //         id: uuidv4(),
// //         name: newArticle.name,
// //         qty: parseInt(newArticle.qty),
// //         selling_price: parseFloat(newArticle.selling_price),
// //         business_id: newArticle.business_id,
// //       });
// //       setNewArticle({ name: "", qty: "", selling_price: "", business_id: "" }); // Clear form
// //     } catch (error) {
// //       console.error("Error adding article:", error);
// //     }
// //   };

// //   return (
// //     <div className="App">
// //       <header>
// //         <h1>Business & Articles Manager</h1>
// //         <p>An offline-first CRUD application</p>
// //       </header>

// //       <main>
// //         {/* Section 1: Add Business */}
// //         <section className="form-section">
// //           <h2>Create New Business</h2>
// //           <div className="form-group">
// //             <label htmlFor="business-name">Business Name</label>
// //             <input
// //               type="text"
// //               id="business-name"
// //               value={newBusinessName}
// //               onChange={(e) => setNewBusinessName(e.target.value)}
// //               placeholder="Enter business name"
// //             />
// //             <button onClick={handleAddBusiness}>Add Business</button>
// //           </div>
// //         </section>

// //         {/* Section 2: Add Article */}
// //         <section className="form-section">
// //           <h2>Create New Article</h2>
// //           <div className="form-group">
// //             <label htmlFor="article-name">Article Name</label>
// //             <input
// //               type="text"
// //               id="article-name"
// //               value={newArticle.name}
// //               onChange={(e) => setNewArticle({ ...newArticle, name: e.target.value })}
// //               placeholder="Enter article name"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="article-qty">Quantity</label>
// //             <input
// //               type="number"
// //               id="article-qty"
// //               value={newArticle.qty}
// //               onChange={(e) => setNewArticle({ ...newArticle, qty: e.target.value })}
// //               placeholder="Enter quantity"
// //               min="0"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="article-price">Selling Price ($)</label>
// //             <input
// //               type="number"
// //               id="article-price"
// //               value={newArticle.selling_price}
// //               onChange={(e) => setNewArticle({ ...newArticle, selling_price: e.target.value })}
// //               placeholder="Enter price"
// //               min="0"
// //               step="0.01"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="business-select">Select Business</label>
// //             <select
// //               id="business-select"
// //               value={newArticle.business_id}
// //               onChange={(e) => setNewArticle({ ...newArticle, business_id: e.target.value })}
// //             >
// //               <option value="">-- Choose a Business --</option>
// //               {businesses.map((business) => (
// //                 <option key={business.id} value={business.id}>
// //                   {business.name}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>
// //           <button onClick={handleAddArticle}>Add Article</button>
// //         </section>

// //         {/* Section 3: Display Businesses and Articles */}
// //         <section className="list-section">
// //           <h2>Businesses & Articles</h2>
// //           {businesses.length === 0 ? (
// //             <p>No businesses added yet.</p>
// //           ) : (
// //             <ul className="business-list">
// //               {businesses.map((business) => (
// //                 <li key={business.id} className="business-item">
// //                   <h3>{business.name}</h3>
// //                   <ul className="article-list">
// //                     {articles
// //                       .filter((article) => article.business_id === business.id)
// //                       .map((article) => (
// //                         <li key={article.id} className="article-item">
// //                           {article.name} - Qty: {article.qty}, Price: ${article.selling_price.toFixed(2)}
// //                         </li>
// //                       ))}
// //                     {articles.filter((a) => a.business_id === business.id).length === 0 && (
// //                       <p>No articles for this business.</p>
// //                     )}
// //                   </ul>
// //                 </li>
// //               ))}
// //             </ul>
// //           )}
// //         </section>
// //       </main>

// //       <footer>
// //         <p>Built with React.js & RxDB | Works offline and syncs with MongoDB Atlas</p>
// //       </footer>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useEffect, useState } from "react";
// import { getDatabase } from "./db";
// import { v4 as uuidv4 } from "uuid";
// import "./App.css";

// function App() {
//   const [db, setDb] = useState(null);
//   const [businesses, setBusinesses] = useState([]);
//   const [articles, setArticles] = useState([]);
//   const [newBusinessName, setNewBusinessName] = useState("");
//   const [newArticle, setNewArticle] = useState({
//     name: "",
//     qty: "",
//     selling_price: "",
//     business_id: "",
//   });
//   const [isOnline, setIsOnline] = useState(navigator.onLine);

//   // MongoDB Atlas Data API configuration
//   const mongoDBEndpoint = "https://data.mongodb-api.com/app/<your-app-id>/endpoint/data/v1"; // Replace
//   const apiKey = "<your-api-key>"; // Replace
//   const databaseName = "crudapp";
//   const dataSource = "Cluster0"; // Replace with your cluster name if different

//   // Initialize database and subscribe to changes
//   useEffect(() => {
//     async function setupDb() {
//       const database = await getDatabase();
//       setDb(database);

//       database.businesses.find().$.subscribe((docs) => {
//         setBusinesses(docs.map((doc) => doc.toJSON()));
//       });

//       database.articles.find().$.subscribe((docs) => {
//         setArticles(docs.map((doc) => doc.toJSON()));
//       });
//     }
//     setupDb();

//     // Listen for online/offline status
//     window.addEventListener("online", () => setIsOnline(true));
//     window.addEventListener("offline", () => setIsOnline(false));
//     return () => {
//       window.removeEventListener("online", () => setIsOnline(true));
//       window.removeEventListener("offline", () => setIsOnline(false));
//     };
//   }, []);

//   // Sync function to push local data to MongoDB Atlas
//   const syncWithMongoDB = async () => {
//     if (!isOnline || !db) return;

//     try {
//       const unsyncedBusinesses = await db.businesses.find().exec();
//       const unsyncedArticles = await db.articles.find().exec();

//       // Sync businesses
//       for (const business of unsyncedBusinesses) {
//         await fetch(`${mongoDBEndpoint}/action/insertOne`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "api-key": apiKey,
//           },
//           body: JSON.stringify({
//             dataSource,
//             database: databaseName,
//             collection: "businesses",
//             document: business.toJSON(),
//           }),
//         });
//       }

//       // Sync articles
//       for (const article of unsyncedArticles) {
//         await fetch(`${mongoDBEndpoint}/action/insertOne`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "api-key": apiKey,
//           },
//           body: JSON.stringify({
//             dataSource,
//             database: databaseName,
//             collection: "articles",
//             document: article.toJSON(),
//           }),
//         });
//       }

//       console.log("Sync completed successfully");
//     } catch (error) {
//       console.error("Sync error:", error);
//     }
//   };

//   // Pull data from MongoDB Atlas to local
//   const pullFromMongoDB = async () => {
//     if (!isOnline || !db) return;

//     try {
//       // Fetch businesses
//       const businessResponse = await fetch(`${mongoDBEndpoint}/action/find`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "api-key": apiKey,
//         },
//         body: JSON.stringify({
//           dataSource,
//           database: databaseName,
//           collection: "businesses",
//         }),
//       });
//       const businessData = await businessResponse.json();
//       for (const doc of businessData.documents) {
//         await db.businesses.upsert(doc);
//       }

//       // Fetch articles
//       const articleResponse = await fetch(`${mongoDBEndpoint}/action/find`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "api-key": apiKey,
//         },
//         body: JSON.stringify({
//           dataSource,
//           database: databaseName,
//           collection: "articles",
//         }),
//       });
//       const articleData = await articleResponse.json();
//       for (const doc of articleData.documents) {
//         await db.articles.upsert(doc);
//       }

//       console.log("Pull completed successfully");
//     } catch (error) {
//       console.error("Pull error:", error);
//     }
//   };

//   // Trigger sync when online
//   useEffect(() => {
//     if (isOnline) {
//       syncWithMongoDB();
//       pullFromMongoDB();
//     }
//   }, [isOnline, db]);

//   const handleAddBusiness = async () => {
//     if (!newBusinessName || !db) return;
//     try {
//       await db.businesses.insert({
//         id: uuidv4(),
//         name: newBusinessName,
//       });
//       setNewBusinessName("");
//       if (isOnline) syncWithMongoDB();
//     } catch (error) {
//       console.error("Error adding business:", error);
//     }
//   };

//   const handleAddArticle = async () => {
//     if (!newArticle.name || !newArticle.qty || !newArticle.selling_price || !newArticle.business_id || !db) {
//       alert("Please fill all article fields!");
//       return;
//     }
//     try {
//       await db.articles.insert({
//         id: uuidv4(),
//         name: newArticle.name,
//         qty: parseInt(newArticle.qty),
//         selling_price: parseFloat(newArticle.selling_price),
//         business_id: newArticle.business_id,
//       });
//       setNewArticle({ name: "", qty: "", selling_price: "", business_id: "" });
//       if (isOnline) syncWithMongoDB();
//     } catch (error) {
//       console.error("Error adding article:", error);
//     }
//   };

//   return (
//     <div className="App">
//       <header>
//         <h1>Business & Articles Manager</h1>
//         <p>An offline-first CRUD application - {isOnline ? "Online" : "Offline"}</p>
//       </header>

//       <main>
//         <section className="form-section">
//           <h2>Create New Business</h2>
//           <div className="form-group">
//             <label htmlFor="business-name">Business Name</label>
//             <input
//               type="text"
//               id="business-name"
//               value={newBusinessName}
//               onChange={(e) => setNewBusinessName(e.target.value)}
//               placeholder="Enter business name"
//             />
//             <button onClick={handleAddBusiness}>Add Business</button>
//           </div>
//         </section>

//         <section className="form-section">
//           <h2>Create New Article</h2>
//           <div className="form-group">
//             <label htmlFor="article-name">Article Name</label>
//             <input
//               type="text"
//               id="article-name"
//               value={newArticle.name}
//               onChange={(e) => setNewArticle({ ...newArticle, name: e.target.value })}
//               placeholder="Enter article name"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="article-qty">Quantity</label>
//             <input
//               type="number"
//               id="article-qty"
//               value={newArticle.qty}
//               onChange={(e) => setNewArticle({ ...newArticle, qty: e.target.value })}
//               placeholder="Enter quantity"
//               min="0"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="article-price">Selling Price ($)</label>
//             <input
//               type="number"
//               id="article-price"
//               value={newArticle.selling_price}
//               onChange={(e) => setNewArticle({ ...newArticle, selling_price: e.target.value })}
//               placeholder="Enter price"
//               min="0"
//               step="0.01"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="business-select">Select Business</label>
//             <select
//               id="business-select"
//               value={newArticle.business_id}
//               onChange={(e) => setNewArticle({ ...newArticle, business_id: e.target.value })}
//             >
//               <option value="">-- Choose a Business --</option>
//               {businesses.map((business) => (
//                 <option key={business.id} value={business.id}>
//                   {business.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button onClick={handleAddArticle}>Add Article</button>
//         </section>

//         <section className="list-section">
//           <h2>Businesses & Articles</h2>
//           {businesses.length === 0 ? (
//             <p>No businesses added yet.</p>
//           ) : (
//             <ul className="business-list">
//               {businesses.map((business) => (
//                 <li key={business.id} className="business-item">
//                   <h3>{business.name}</h3>
//                   <ul className="article-list">
//                     {articles
//                       .filter((article) => article.business_id === business.id)
//                       .map((article) => (
//                         <li key={article.id} className="article-item">
//                           {article.name} - Qty: {article.qty}, Price: ${article.selling_price.toFixed(2)}
//                         </li>
//                       ))}
//                     {articles.filter((a) => a.business_id === business.id).length === 0 && (
//                       <p>No articles for this business.</p>
//                     )}
//                   </ul>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </section>
//       </main>

//       <footer>
//         <p>Built with React.js & RxDB | Works offline and syncs with MongoDB Atlas</p>
//       </footer>
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from "react";
import { getDatabase } from "./db";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [db, setDb] = useState(null);
  const [businesses, setBusinesses] = useState([]);
  const [articles, setArticles] = useState([]);
  const [newBusinessName, setNewBusinessName] = useState("");
  const [newArticle, setNewArticle] = useState({
    name: "",
    qty: "",
    selling_price: "",
    business_id: "",
  });
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Vercel serverless function endpoint (replace with your deployed URL)
  const syncEndpoint = "https://<your-vercel-app>.vercel.app/api/sync";

  useEffect(() => {
    async function setupDb() {
      const database = await getDatabase();
      setDb(database);

      database.businesses.find().$.subscribe((docs) => {
        setBusinesses(docs.map((doc) => doc.toJSON()));
      });

      database.articles.find().$.subscribe((docs) => {
        setArticles(docs.map((doc) => doc.toJSON()));
      });
    }
    setupDb();

    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
    return () => {
      window.removeEventListener("online", () => setIsOnline(true));
      window.removeEventListener("offline", () => setIsOnline(false));
    };
  }, []);

  const syncWithMongoDB = async () => {
    if (!isOnline || !db) return;

    try {
      const unsyncedBusinesses = await db.businesses.find().exec();
      const unsyncedArticles = await db.articles.find().exec();

      const businessData = unsyncedBusinesses.map((doc) => doc.toJSON());
      const articleData = unsyncedArticles.map((doc) => doc.toJSON());

      const response = await fetch(syncEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businesses: businessData,
          articles: articleData,
        }),
      });

      if (!response.ok) throw new Error("Sync failed");
      console.log("Data synced to MongoDB Atlas:", await response.json());
    } catch (error) {
      console.error("Error syncing with MongoDB Atlas:", error);
    }
  };

  // Pull function (simplified; assumes manual Atlas updates for now)
  const pullFromMongoDB = async () => {
    if (!isOnline || !db) return;
    console.log("Pull from MongoDB Atlas not implemented. Add data in Atlas manually for now.");
  };

  useEffect(() => {
    if (isOnline) {
      syncWithMongoDB();
      pullFromMongoDB();
    }
  }, [isOnline, db]);

  const handleAddBusiness = async () => {
    if (!newBusinessName || !db) return;
    const business = {
      id: uuidv4(),
      name: newBusinessName,
    };
    try {
      await db.businesses.insert(business);
      setNewBusinessName("");
      if (isOnline) syncWithMongoDB();
    } catch (error) {
      console.error("Error adding business:", error);
    }
  };

  const handleAddArticle = async () => {
    if (!newArticle.name || !newArticle.qty || !newArticle.selling_price || !newArticle.business_id || !db) {
      alert("Please fill all article fields!");
      return;
    }
    const article = {
      id: uuidv4(),
      name: newArticle.name,
      qty: parseInt(newArticle.qty),
      selling_price: parseFloat(newArticle.selling_price),
      business_id: newArticle.business_id,
    };
    try {
      await db.articles.insert(article);
      setNewArticle({ name: "", qty: "", selling_price: "", business_id: "" });
      if (isOnline) syncWithMongoDB();
    } catch (error) {
      console.error("Error adding article:", error);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Business & Articles Manager</h1>
        <p>An offline-first CRUD application - {isOnline ? "Online" : "Offline"}</p>
      </header>

      <main>
        <section className="form-section">
          <h2>Create New Business</h2>
          <div className="form-group">
            <label htmlFor="business-name">Business Name</label>
            <input
              type="text"
              id="business-name"
              value={newBusinessName}
              onChange={(e) => setNewBusinessName(e.target.value)}
              placeholder="Enter business name"
            />
            <button onClick={handleAddBusiness}>Add Business</button>
          </div>
        </section>

        <section className="form-section">
          <h2>Create New Article</h2>
          <div className="form-group">
            <label htmlFor="article-name">Article Name</label>
            <input
              type="text"
              id="article-name"
              value={newArticle.name}
              onChange={(e) => setNewArticle({ ...newArticle, name: e.target.value })}
              placeholder="Enter article name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="article-qty">Quantity</label>
            <input
              type="number"
              id="article-qty"
              value={newArticle.qty}
              onChange={(e) => setNewArticle({ ...newArticle, qty: e.target.value })}
              placeholder="Enter quantity"
              min="0"
            />
          </div>
          <div className="form-group">
            <label htmlFor="article-price">Selling Price ($)</label>
            <input
              type="number"
              id="article-price"
              value={newArticle.selling_price}
              onChange={(e) => setNewArticle({ ...newArticle, selling_price: e.target.value })}
              placeholder="Enter price"
              min="0"
              step="0.01"
            />
          </div>
          <div className="form-group">
            <label htmlFor="business-select">Select Business</label>
            <select
              id="business-select"
              value={newArticle.business_id}
              onChange={(e) => setNewArticle({ ...newArticle, business_id: e.target.value })}
            >
              <option value="">-- Choose a Business --</option>
              {businesses.map((business) => (
                <option key={business.id} value={business.id}>
                  {business.name}
                </option>
              ))}
            </select>
          </div>
          <button onClick={handleAddArticle}>Add Article</button>
        </section>

        <section className="list-section">
          <h2>Businesses & Articles</h2>
          {businesses.length === 0 ? (
            <p>No businesses added yet.</p>
          ) : (
            <ul className="business-list">
              {businesses.map((business) => (
                <li key={business.id} className="business-item">
                  <h3>{business.name}</h3>
                  <ul className="article-list">
                    {articles
                      .filter((article) => article.business_id === business.id)
                      .map((article) => (
                        <li key={article.id} className="article-item">
                          {article.name} - Qty: {article.qty}, Price: ${article.selling_price.toFixed(2)}
                        </li>
                      ))}
                    {articles.filter((a) => a.business_id === business.id).length === 0 && (
                      <p>No articles for this business.</p>
                    )}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer>
        <p>Built with React.js & RxDB | Syncs with MongoDB Atlas via proxy</p>
      </footer>
    </div>
  );
}

export default App;