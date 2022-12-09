import { useState } from "react";
interface IShoppingList {}
const ShoppingList = (props: IShoppingList) => {
  const [shoppinglist, setShoppingList] = useState<Array<string | number>>([]);
  const [nameinput, setNameInput] = useState<string>("");
  const [numberinput, setNumberInput] = useState<string[]>([]);
  const removeItem = (itemIndex: number) => {
    setShoppingList(
      shoppinglist.filter((item) => shoppinglist.indexOf(item) != itemIndex)
    );
    setNumberInput(
      numberinput.filter((item) => numberinput.indexOf(item) != itemIndex)
    );
  };
  return (
    <>
      <div>
        <label />
        <input
          key="nameinput"
          type="text"
          placeholder="name"
          onChange={(name) => setNameInput(name.target.value)}
        />
        <label />
        <input
          key="numberinput"
          type="text"
          placeholder="amount"
          onChange={(count) =>
            setNumberInput([...numberinput, count.target.value])
          }
        />
        <input
          type="button"
          value="Add"
          onClick={() => setShoppingList([...shoppinglist, nameinput])}
        />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {shoppinglist.map((item) => (
              <tr>
                <td>{item}</td>
                <td>{numberinput[shoppinglist.indexOf(item)]}</td>
                <td>
                  <input
                    value="remove item"
                    type="button"
                    onClick={() => {
                      removeItem(shoppinglist.indexOf(item));
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShoppingList;
