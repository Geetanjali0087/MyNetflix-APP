import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content-part',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-part.component.html',
  styleUrl: './content-part.component.css'
})
export class COntentPartComponent {
  items = [
    { name: 'Item 1', image: 'https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABfM-jPcgAF3GsSyv379Us1VAT_6qlzcUMWCmP3R5wn5VT6KFNWzKTA46gpYQTXeIWUVEEH0SU-otX4WSDWmrBkr4nzdDYinM3Lebs3e5VZfg7uwoaRqXMclzlCAWoRBlCYTc1DuttBGUTjIuTWB5VNwApol4POhmfF5EOMbD5q3szMZymx_0437QtZ3hAiP3tA-VxtTHZwLesSXkmitFY0ydmi-J3zAsPk4MU3sWkW6vjX_wvamMzCqKU8uYuHmMa7AYskFtEQEUOfvQGrIvMd2B1iLu5D44mugyPeY4ixBUwBrFQ107uJguFfbnNb30-YKMJlzSjqyDV6RnB9iIfJI.jpg?r=2b9' },
    { name: 'Item 2', image: 'https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABRmXZDSWgI5HmcoMQqIuzUZSSQMK6Te9vm9vMKaCvDDn4akx-vq_XZKTXklQuc_vWzFBJ0TUWtJWY2Fk4JJAGC2Woraw2P77u9o5IhjYuAiSEDqXzWrxssevcDSvMlH2FZ_CFwHGHGqDRHnZvOltiU4dBzd38DkAzeN2Z7TrqMINRxXSjLvJQviqFaF3F9XpkfSJAkeQK4qJFllu81ZfE3fjBRM0n0HrCDlGxzUUcfJaNgKfiFvDleGZTw7P5OmvKtmqxjhbkawHwpAHEPKq1_DjV8KxFQ-wKwIlsAbpNw7C0WKFTbnWAYzobrvS7H_3hISUM-OAM30B-s-j2ZcP5oHHPkh_diNfQ8XgCz5M1yYuHp153tM.jpg?r=ead' },
    { name: 'Item 3', image: 'https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABSRMMTO1SAZFYPX5xoisWlOq4PmDiL98tRRuK7zeMUor8SEewo0fHAJdgH0Rs3AWXtGMnvvi1k6WBVAsHnL_0WOHRzpIxx9M4qcC4r6C24qapVUszNBCWmPAwsddZ7TFG0dpeqDkbDKxR_o1P6JIb-Vr5I1IpuPtXFX40d-xgV6AJ49kEUM6m9ndbmjslF5d6tbA4zWD2TmVkmgGknbSmtQizFUjh-m_Ul-ztJiJDJEzh7xHqIYNidPB1HnqnDkYWXcE4aYGCmWvhC7vfnsqJs1My9xdKIS-qFQ0YBwgHjLfh306up0BzSlindsuHLPiTIuujFTmRy0QxW3C4yVBWzgGmPuocGV0lck0uw22cref3pTQdOY.jpg?r=787' },
    { name: 'Item 4', image: 'https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABdMVpxiVaLv3IdHlg6vluBwFb9V3yElsVYg0jzI2JvFPOGRBwtxm6GfPjy4VxymIU4YZuVNliqWbCXJqMKke-TUoyxI_zAZQNVU5HtlBJ0wg77bktGxiXj7ymsRPqmjT1kreXZUPREyMOxc3hKsYZy4dZas1lQTpV9gZQb1zFx8RGxa7SxwxZW4Z1vCpA_Xc2Z8YRPgOEx4WNOjLrJxCAhxSABUiX_r2oqq_pmUOgyrQo2O4bdAHrNYMAexGpRgzPou6W6PNHwQbl0rEdd_Tn5aLW0o8dB5ewRCM6gbK5oLE-cuM5uknaLHTMK4-6JosWWUTQsyr9I-ez7P5F2268ss.jpg?r=8c7' },
    { name: 'Item 5', image: 'https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABSnGRniDmWP8Gj85YBQ6V4Cfdyf14S0ZaC-Ld7XY-TnVLJ8BSdbAPe7ixmGQICeUKJVIa_Kqh2xG7iwZe3qyQboQSkYQ2aGS8OTqbpOtIatdlBkD0tJr-okXkW9wuU--FqcTe5Qya6AaJ917Nieote93X0Mm7a35k8M.jpg?r=a57' },
    { name: 'Item 6', image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202301/Animal_1673270841.jpg' },
    { name: 'Item 7', image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202301/Animal_1673270841.jpg' },
    { name: 'Item 8', image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202301/Animal_1673270841.jpg' },
    { name: 'Item 9', image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202301/Animal_1673270841.jpg' },
    { name: 'Item 10', image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202301/Animal_1673270841.jpg' },
  ];

  scrollRight() {
    const container = document.querySelector('.horizontal-list');
    container!.scrollBy({ left: 200, behavior: 'smooth' });
  }

  scrollLeft() {
    const container = document.querySelector('.horizontal-list');
    container!.scrollBy({ left: -200, behavior: 'smooth' });
  }
}
// <span style="background-image:url(https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABSnGRniDmWP8Gj85YBQ6V4Cfdyf14S0ZaC-Ld7XY-TnVLJ8BSdbAPe7ixmGQICeUKJVIa_Kqh2xG7iwZe3qyQboQSkYQ2aGS8OTqbpOtIatdlBkD0tJr-okXkW9wuU--FqcTe5Qya6AaJ917Nieote93X0Mm7a35k8M.jpg?r=a57)" class="default-ltr-cache-cf8xw5 ekc72im3"></span>// <span style="background-image:url(https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABdMVpxiVaLv3IdHlg6vluBwFb9V3yElsVYg0jzI2JvFPOGRBwtxm6GfPjy4VxymIU4YZuVNliqWbCXJqMKke-TUoyxI_zAZQNVU5HtlBJ0wg77bktGxiXj7ymsRPqmjT1kreXZUPREyMOxc3hKsYZy4dZas1lQTpV9gZQb1zFx8RGxa7SxwxZW4Z1vCpA_Xc2Z8YRPgOEx4WNOjLrJxCAhxSABUiX_r2oqq_pmUOgyrQo2O4bdAHrNYMAexGpRgzPou6W6PNHwQbl0rEdd_Tn5aLW0o8dB5ewRCM6gbK5oLE-cuM5uknaLHTMK4-6JosWWUTQsyr9I-ez7P5F2268ss.jpg?r=8c7)" class="default-ltr-cache-cf8xw5 ekc72im3"></span>