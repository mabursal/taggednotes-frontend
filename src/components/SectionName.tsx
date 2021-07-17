import { useState } from "react";
import { Input, Modal } from "antd";

const SectionName: React.FC<{ sectionId: number; sectionName: string }> = ({
  sectionName,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOk = () => {
    
  }

  return (
    <div>
      <div onDoubleClick={() => setOpen(true)}>{sectionName}</div>
      <Modal
        visible={open}
        closable={false}
        okText='Change'
        onOk={handleOk}
        onCancel={() => setOpen(false)}
      >
        <Input defaultValue={sectionName} />
      </Modal>
    </div>
  );
};

export default SectionName;