import { useAuthState } from "react-firebase-hooks/auth";
import DestinationCard from "../Component/DestinationCard";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {auth, db} from "../Serves/firebase";
import {addDoc, collection} from "firebase/firestore";



function EditDestinations() {
    const [title, setTitle] = useState("");
    const [imageSrc, setImageSrc] = useState("");
    const [description, setDescription] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();


    /*useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user){
            navigate("/dashboard");
        }

    }, [user, loading]);*/


    const AddDestination=async (title, imageSrc, description) =>{

            try {
             //   const res = await createUserWithEmailAndPassword(auth, email, password);
             //   const user = res.user;
                await addDoc(collection(db, "destinations"), {
//                    uid: user.uid,
                    title,
                    authProvider: "local",
                    imageSrc,
                    description,
                });
            } catch (err) {
                console.error(err);
                alert(err.message);
            }
        };

    const DeleteDestination=async () =>{

        try {
            //   const res = await createUserWithEmailAndPassword(auth, email, password);
            //   const user = res.user;
            await addDoc(collection(db, "destinations"), {
//                    uid: user.uid,
                title,
                authProvider: "local",
                imageSrc,
                description,
            });
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    return (
        <div className="main">
            <div className="current-destinations">
               <DestinationCard/>
                <DestinationCard/>
                <DestinationCard/>
                <DestinationCard/>
                <DestinationCard/>
                <DestinationCard/>
                <DestinationCard/>
                <DestinationCard/>
            </div>
            <div className="add-destination">
                <input
                    type="text"
                    className="Add-textBox"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <input
                    type="text"
                    className="Add-textBox"
                    value={imageSrc}
                    onChange={(e) => setImageSrc(e.target.value)}
                    placeholder="Image src"
                />
                <input
                    type="text"
                    className="Add-textBox"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <button
                    className="Add__btn"
                  onClick={() => AddDestination(title,imageSrc,description)}
                >
                   SAVE
                </button>


            </div>
        </div>
    );
}
export default EditDestinations;