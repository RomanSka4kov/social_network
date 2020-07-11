export const updateObjectInArray = (items, itemId, objectPropName,  objPiece) => {
    return items.map(el => {
        if (el[objectPropName] === itemId) {
            return { ...el, ...objPiece }
        }
        return el;
    })
}

