import { useDispatch ,useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { setPublicId } from 'src/redux/app'


export function usePublicId() {
  const appData = useSelector((state) => state.app);
  const dispatch = useDispatch()
  let publicId = appData.publicId
  if(!publicId) {
    let id = uuidv4()
    dispatch(setPublicId(id))
  }
  return [
    appData
  ]
}