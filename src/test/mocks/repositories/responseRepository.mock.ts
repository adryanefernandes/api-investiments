import { Password, User } from "../../../entities";

export const UserResponseMock: User = {
  id: 9,
  uuid: "ec1342b4-56c7-4cf5-bca5-414bb6ee3b1d",
  name: "RAIMUNDO",
  lastName: "REZENDE",
  document: "60234460601",
  email: "raimundo.marcelo.rezende@wredenborg.se",
  cellphone: "67982326471",
  tellphone: "6725554946",
  status: "active",
  addresses: undefined,
  bankAccounts: undefined,
  wallets: undefined,
  extracts: undefined,
  passwords: {
    id: 6,
    hash: "$2a$10$vH.88f291njYo1SBDoCS3eMBOBSiNGUDlp9ayNhCBOgiZRc7TF8MG",
    user: undefined,
    times: {
      createdAt: new Date("2023-01-31T04:49:53.031Z"),
      updatedAt: new Date("2023-01-31T04:49:53.031Z"),
      deletedAt: null,
    },
  },
  times: {
    createdAt: new Date("2023-01-31T04:49:52.854Z"),
    updatedAt: new Date("2023-01-31T04:50:50.444Z"),
    deletedAt: null,
  },
};
