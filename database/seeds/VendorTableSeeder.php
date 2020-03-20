<?php

use Illuminate\Database\Seeder;
use App\Vendor;

class VendorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $vendor1 = Vendor::create([
            "owner_first_name" => "Burhan",
            "owner_last_name" => "Basyri",
            "email" => "basyri21@gmail.com",
            "name" => "Keylacopier • Owner",
            "location" => "Jl. Kaliurang KM 13,5, Besi, Sukoharjo, Sleman (Depan Olive Chicken Jakal KM 13,5)",
            "openTime" => "07.00",
            "closeTime" => "23.00",
            "phone_number" => "087839090555",
            "image" => "FC_keyla.jpeg"
        ]);
        $vendor1->save();

        $vendor2 = Vendor::create([
            "owner_first_name" => "Faza",
            "owner_last_name" => "Faza",
            "email" => "basyri21@gmail.com",
            "name" => "Faza FC • Owner",
            "location" => "Jl. Pandanaran - UII, Candi Winangun, Sardonoharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581 (Sebelah Ayam Jalapeno)",
            "openTime" => "07.00",
            "closeTime" => "21.00",
            "phone_number" => "085741976252",
            "image" => "FC_Faza.png"
        ]);
        $vendor2->save();

        $vendor3 = Vendor::create([
            "owner_first_name" => "Rika",
            "owner_last_name" => "Rika",
            "email" => "rika@gmail.com",
            "name" => "Graha FC • Owner",
            "location" => "Besi, Sukoharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581 (Depan Rumah Makan Padang Mentari Pagi)",
            "openTime" => "07.00",
            "closeTime" => "20.00",
            "phone_number" => "081326493545",
            "image" => "FC_Graha.png"
        ]);
        $vendor3->save();

        $vendor4 = Vendor::create([
            "owner_first_name" => "Parijo",
            "owner_last_name" => "Parijo",
            "email" => "parijo@gmail.com",
            "name" => "Mataram FC • Owner",
            "location" => "Jl. Besi Jaya No.B3, Besi, Sukoharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581 (Depan Kost Putri Orange)",
            "openTime" => "07.00",
            "closeTime" => "21.00",
            "phone_number" => "082216228684",
            "image" => "FC_Mataram.png"
        ]);
        $vendor4->save();

        $vendor5 = Vendor::create([
            "owner_first_name" => "Miftah",
            "owner_last_name" => "Miftah",
            "email" => "miftah@gmail.com",
            "name" => "Nusantara FC • Owner",
            "location" => "Gg. Kanguru, Tj. Manding, Umbulmartani, Kec. Ngemplak, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55584 (Sebelah Hokkaido Ice Cream Corner)",
            "openTime" => "07.00",
            "closeTime" => "21.00",
            "phone_number" => "081392009290",
            "image" => "FC_Nusantara.png"
        ]);
        $vendor5->save();
    }
}
