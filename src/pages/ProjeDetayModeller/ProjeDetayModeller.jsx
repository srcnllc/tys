import { useState } from 'react';
import Container from '../../components/Tools/Container/Container';
import styles from './ProjeDetayModeller.module.scss';

export default function ProjeDetayModeller() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };
  const handleCheckboxChange = (index) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(index) ? prevSelectedRows.filter((row) => row !== index) : [...prevSelectedRows, index],
    );
  };

  const handleView = (dosyaAdı) => {
    alert(`Görüntüleniyor: ${dosyaAdı}`);
  };
  const handleClearSelection = () => {
    setSelectedRows([]);
    setActiveButton(null);
  };
  const data = [
    {
      no: 1,
      dosyaAdı: 'Architectural_CORE',
      özellikDosyası: 'Architectural_CORE.json',
      boyut: '10,67mb',
      yüklenmeTarihi: '27.09.2024 - 09:13',
      gönderen: 'Melih Özgürün',
      vericion: 1,
    },
    {
      no: 2,
      dosyaAdı: 'Arc_DOORS',
      özellikDosyası: 'DOORS.json',
      boyut: '21,67mb',
      yüklenmeTarihi: '27.09.2024 - 09:13',
      gönderen: 'Ayşe Demir',
      vericion: 1,
    },
    {
      no: 3,
      dosyaAdı: 'Architectural_FLOORS',
      özellikDosyası: 'Architectural_floors.json',
      boyut: '321,67mb',
      yüklenmeTarihi: '27.09.2024 - 09:13',
      gönderen: 'Melih Özgürün',
      vericion: 1,
    },
    {
      no: 4,
      dosyaAdı: 'BASEMENT',
      özellikDosyası: 'BASEMENT-1.json',
      boyut: '0,67mb',
      yüklenmeTarihi: '27.09.2024 - 09:13',
      gönderen: 'Ayşe Demir',
      vericion: 2,
    },
    {
      no: 5,
      dosyaAdı: 'PARKING LOT',
      özellikDosyası: 'PARKING-LOTS.json',
      boyut: '10,67mb',
      yüklenmeTarihi: '27.09.2024 - 09:13',
      gönderen: 'Ayşe Demir',
      vericion: 1,
    },
    {
      no: 6,
      dosyaAdı: 'Architectural_Columns',
      özellikDosyası: 'COLUMNS.json',
      boyut: '10,67mb',
      yüklenmeTarihi: '27.09.2024 - 20:20',
      gönderen: 'Ahmet Yıldırım',
      vericion: 1,
    },
    {
      no: 7,
      dosyaAdı: 'Architectural_CORE',
      özellikDosyası: 'Architectural_CORE.json',
      boyut: '10,67mb',
      yüklenmeTarihi: '27.09.2024 - 09:13',
      gönderen: 'Melih Özgürün',
      vericion: 1,
    },
  ];

  const filteredData = activeButton === 2 ? data.filter((_, index) => selectedRows.includes(index)) : data;

  return (
    <div className={styles.projedetaymodeller}>
      <Container large>
        <div className={styles.modeller}>
          <div className={styles.topContent}>
            <div className={styles.buttons}>
              <button onClick={() => handleButtonClick(1)} className={activeButton === 1 ? styles.activeButton : ''}>
                3D Modeli Göster
                <img src="/images/icons/3d-scan.png" alt="3d" className={activeButton === 1 ? '' : styles.inactive} />
                <img
                  src="/images/icons/passive-3d-scan.png"
                  alt="3d"
                  className={activeButton !== 1 ? '' : styles.inactive}
                />
              </button>
              <button onClick={() => handleButtonClick(2)} className={activeButton === 2 ? styles.activeButton : ''}>
                Seçili modelleri göster
              </button>
              {activeButton === 2 && (
                <span onClick={handleClearSelection} className={styles.clearSelection}>
                  Seçimleri kaldır
                </span>
              )}
            </div>
            <div className={styles.rightbuttons}>
              <button>Metraj Bilgi Dosyasını Oluştur</button>
              <button className={styles.active}>
                Model Yükle
                <img src="/images/icons/upload.png" alt="upload" />
              </button>
            </div>
          </div>
          <table className={styles.tables}>
            <thead>
              <tr>
                <th></th>
                <th>No</th>
                <th>Dosya Adı</th>
                <th>Özellik Dosyası</th>
                <th>Boyut</th>
                <th>Yükleme Tarihi</th>
                <th>Görüntüle</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(index)}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                  <td>{item.no}</td>
                  <td className={styles.name}>
                    {item.dosyaAdı}
                    <span>ver:{item.vericion}</span>
                  </td>
                  <td>{item.özellikDosyası}</td>
                  <td>{item.boyut}</td>
                  <td className={styles.updateTime}>
                    {item.yüklenmeTarihi}
                    <span>{item.gönderen}</span>
                  </td>
                  <td>
                    <div className={styles.eye} onClick={() => handleView(item.dosyaAdı)}>
                      <img src="/images/icons/eye-fill.png" alt="view" />
                    </div>
                  </td>
                  <td>
                    <div className={styles.transactions}>
                      <img src="/images/icons/more-vertical.png" alt="more" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}
