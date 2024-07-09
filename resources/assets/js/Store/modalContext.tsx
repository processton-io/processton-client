import InteractionBuilder from "../Components/InteractionBuilder";
import { createContext, useState } from "react";
import AppIcon from "../Components/Elements/AppIcon";

type ModelProps = {

}

interface modalContextProps {
    models: ModelProps[];
    newModel: (model: ModelProps) => void;
}

const ModalContext = createContext<modalContextProps>({
    models: [],
    newModel: () => {},
});

export const ModalContextProvider = ({children}) => {
    
    const [models, setModels] = useState<ModelProps[]>([]);

    const newModel = (link: string) => {
        console.log(link);
        
        if(link){
            let urltofetch = link;
            fetch(urltofetch).then(response => response.json()).then(json => {
                setModels([
                    ...models,
                    json.interaction
                ])
            });
        }
    }

    const context: modalContextProps = {
        models: models,
        newModel
    }

    const closeModel = (index) => {
        setModels(models => models.filter((_, i) => i !== index));
    }

    return (
        <ModalContext.Provider value={context}>
            <>
            {children}
            </>
            <>
                {models.map((model, index) => {
                    return <ModelRenderer key={index} model={model} closeModel={() => closeModel(index)}  />
                })}
            </>
        </ModalContext.Provider>
    )
};


function ModelRenderer({model, attachment_values = [], closeModel}) {
    return (
        <ModalUI model={model} attachment_values={attachment_values} closeModel={closeModel} />
    )
}

export function ModalUI({model, attachment_values = [], closeModel}) {

  return (
    <>
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
                <div className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                    <div className="absolute -right-2 -top-2 cursor-pointer bg-red-500 p-0.5 rounded-full" onClick={() => closeModel()} >
                        <AppIcon icon="x-circle" className="text-white" />
                    </div>
                    <div className="bg-white rounded-lg">
                        <InteractionBuilder {...model} attachment_values={attachment_values} />
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default ModalContext;