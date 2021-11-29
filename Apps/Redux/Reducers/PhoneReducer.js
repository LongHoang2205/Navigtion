import {
  ADD_PHONE,
  //   GET_PHONE_REQUEST,
  //   GET_PHONE_SUCCESS,
  //   GET_PHONE_FAILURE,
  CHANGE_HEART,
  REMOVE_PHONE,
} from "../../Constants/ReduxType";
import { Images } from "../../Themes";

// const initialState = {

//   phoneList: [],
//   phoneError: null,
// };

const initialState = {
  iphone: [
    {
      id: 1,
      name: "Iphone 13 Pro Max",
      price: "33.990.000",
      like: true,
      img: Images.ip13pr,
      about:
        "iPhone 13 Pro Max 128GB - siêu phẩm được mong chờ nhất ở nửa cuối năm 2021 đến từ Apple. Máy có thiết kế không mấy đột phá khi so với người tiền nhiệm, bên trong đây vẫn là một sản phẩm có màn hình siêu đẹp, tần số quét được nâng cấp lên 120 Hz mượt mà, cảm biến camera có kích thước lớn hơn, cùng hiệu năng mạnh mẽ với sức mạnh đến từ Apple A15 Bionic, sẵn sàng cùng bạn chinh phục mọi thử thách.",
    },
    {
      id: 2,
      name: "Iphone 13",
      price: "24.990.000",
      like: false,
      img: Images.ip13,
      about:
        "Trong khi sức hút đến từ bộ 4 phiên bản iPhone 12 vẫn chưa nguội đi, thì Apple đã mang đến cho người dùng một siêu phẩm mới iPhone 13 - điện thoại có nhiều cải tiến thú vị sẽ mang lại những trải nghiệm hấp dẫn nhất cho người dùng.",
    },
    {
      id: 3,
      name: "Iphone 12",
      price: "20.990.000",
      like: false,
      img: Images.ip12,
      about:
        "Trong những tháng cuối năm 2020, Apple đã chính thức giới thiệu đến người dùng cũng như iFan thế hệ iPhone 12 series mới với hàng loạt tính năng bứt phá, thiết kế được lột xác hoàn toàn, hiệu năng đầy mạnh mẽ và một trong số đó chính là iPhone 12 64GB.",
    },
    {
      id: 4,
      name: "Iphone 11",
      price: "17.990.000",
      like: true,
      img: Images.ip11,
      about:
        "Tháng 09/2019, Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11 64GB có mức giá rẻ nhất nhưng vẫn được nâng cấp mạnh mẽ như iPhone Xr ra mắt trước đó.",
    },
    {
      id: 5,
      name: "Iphone XR",
      price: "13.490.000",
      like: true,
      img: Images.ipxr,
      about:
        "Là chiếc điện thoại iPhone có mức giá dễ chịu, phù hợp với nhiều khách hàng hơn, iPhone Xr vẫn được ưu ái trang bị chip Apple A12 mạnh mẽ, màn hình tai thỏ cùng khả năng kháng nước kháng bụi",
    },
    {
      id: 6,
      name: "Iphone SE",
      price: "12.490.000",
      like: false,
      img: Images.ipse,
      about:
        "iPhone SE 2020 khi được cho ra mắt đã làm thỏa mãn triệu tín đồ Táo khuyết. Máy sở hữu thiết kế siêu nhỏ gọn như iPhone 8, chip A13 Bionic cho hiệu năng khủng như iPhone 11, nhưng iPhone SE 2020 lại có một mức giá tốt đến bất ngờ.",
    },
  ],
};

export default function (phone = initialState, action) {
  const newIphone = phone.iphone ? phone.iphone : [];
  switch (action.type) {
    // case GET_PHONE_REQUEST:
    //   // trước khi gọi request để lấy data mới thì
    //   // clear data cũ
    //   return {
    //     phoneList: [],
    //     phoneError: null,
    //   };
    // case GET_PHONE_SUCCESS:
    //   // sẽ chạy sau khi response trả về
    //   // data truyền từ response sẽ nằm trong action như các redux khác
    //   const responseList = action.data;
    //   return {
    //     phoneList: responseList,
    //     phoneError: null,
    //   };
    // case GET_PHONE_FAILURE:
    //   const responseError = action.error;
    //   return {
    //     phoneList: [],
    //     phoneError: responseError,
    //   };
    case CHANGE_HEART:
      console.log(action.payload.heart.like);
      const changeHeart = action.payload.heart.like;
      const changeId = action.payload.heart.id;

      console.log(action.payload.heart.id);

      const editMapList = newIphone.map((heart) => {
        if (heart.id === changeId) {
          return {
            ...heart,
            like: !changeHeart,
          };
        } else {
          return heart;
        }
      });
      //console.log("edit map ne:", editMapList);
      return {
        iphone: editMapList,
      };

    // return phone.map((iphones, id) =>
    //   action.id === id ? { like: !iphones.like } : iphones
    // );

    // case ADD_PHONE: {
    //   newIphone.push({
    //     // id se bang do dai cua mang + 1 (se khong bh trung nhau)
    //     id: iphone.addIphone.length + 1,
    //     name: action.payload.name,
    //     img: Images.ipxr,
    //     price: action.payload.price,
    //     like: action.payload.like,
    //     about: action.payload.about,
    //   });
    //   return {
    //     iphone: newIphone,
    //   };
    // }

    case REMOVE_PHONE:
      console.log("remove phone:", action.payload.item.id);
      const removeId = action.payload.item.id;
      const removePhoneList = newIphone.filter((x) => {
        if (x.id !== removeId) {
          return x;
        }
      });
      return {
        iphone: removePhoneList,
      };
    default:
      return phone;
  }
}
