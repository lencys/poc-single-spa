import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Parcel from 'single-spa-react/parcel'
import './App.scss'
import { mountRootParcel } from 'single-spa'

function App() {
    const [loadParcel, setLoadParcel] = useState(false);
    const [loadParcel2, setLoadParcel2] = useState(false);
    const [user, setUser] = useState<string | undefined>(undefined);
    const [user2, setUser2] = useState<string | undefined>(undefined);
    const parcelModuleName = "@test/parcels";

    async function loadWelcomeParcel() {
        console.log(parcelModuleName)
        const parcelsModule = await import(/* @vite-ignore */ parcelModuleName);
        console.log(parcelsModule)
        return parcelsModule.welcomeParcel();
    }

    return (
        <div className="app">
            <div className="row w-100">
                <div className="col-sm-5">
                    <div className="root-content">
                        <h1><span><img src={reactLogo} alt="React" /></span>React Root Project</h1>
                        <p>
                            Click the button below to load a Svelte parcel.
                        </p>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setLoadParcel(v => !v)}
                        >
                            Toggle Parcel
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary ms-2"
                            onClick={() => setLoadParcel2(v => !v)}
                        >
                            Toggle Parcel 2
                        </button>
                    </div>
                </div>
                <div className="col-sm-7">
                    <div className="parcel-content">
                        <h3>Parcel Display</h3>
                        <div className="mb-3">
                            <label htmlFor="user">User's name:</label>
                            <input className="form-control" type="text" id="user" onInput={(e) => setUser(e.currentTarget.value)} />
                        </div>
                        {loadParcel ? <Parcel
                            config={loadWelcomeParcel}
                            mountParcel={mountRootParcel}
                            handleError={console.error}
                            user={user}
                        /> : null}
                        <h3>Parcel Display 2</h3>
                        <div className="mb-3">
                            <label htmlFor="user2">User's name:</label>
                            <input className="form-control" type="text" id="user2" onInput={(e) => setUser2(e.currentTarget.value)} />
                        </div>
                        {loadParcel2 ? <Parcel
                            config={loadWelcomeParcel}
                            mountParcel={mountRootParcel}
                            handleError={console.error}
                            user={user2}
                        /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
