import styles from './GenerationInformation.module.scss';

export default function GenerationInformation() {
  const data = [
    { "key": "İşveren Firma", "value": "Romanya İçişleri Bakanlığı" },
    { "key": "Durumu", "value": "Aktif" },
    { "key": "Tarihler", "value": "07.02.2024 - 02.02.2026 - 726 gün" },
    { "key": "Türü", "value": "Üst yapı / HASTANE" },
    { "key": "Ülke / Şehir", "value": "Romanya / BÜKREŞ" },
    { "key": "Adres", "value": "Sectotur strada Argentina Nr.41" },
    { "key": "Açıklama", "value": "The Dimitrie Gretada Hospital Projects. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." }
  ];
  return (
<div className={styles.generationinformation}>
  <h2>Genel Bilgi</h2>
  <table>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className={styles.tableKey}>{item.key}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
</div>
)
}