import { useState } from "react";

// Logic popover: gồn state activePop là trạng thái hiển thị hay ẩn 1 khối. Function showPop để setActivePop là true để hiển thị lên, còn hidePop là hàm để ẩn pop
function usePop() {
  const [activePop, setActivePop] = useState(false);
  const showPop = () => setActivePop(true);
  const hidePop = () => setActivePop(false);
  // Function này trả về: state ActivePop(hiển thị hay ẩn), function showPop và hidePop
  return {
    activePop,
    showPop,
    hidePop,
  };
}

export default usePop;
