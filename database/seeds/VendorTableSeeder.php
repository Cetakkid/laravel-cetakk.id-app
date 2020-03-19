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
        Vendor::create([
            "owner_first_name" => "Burhan",
            "owner_last_name" => "Basyri",
            "email" => "basyri21@gmail.com",
            "name" => "Vendor A",
            "location" => "Perumahan Griya Perwita Wisata BU-6, Jl. Kaliurang KM. 13,5, Ngaglik, Sleman, DIY",
            "openTime" => "07.00",
            "closeTime" => "23.00",
            "phone_number" => "089687901265"
        ]);
    }
}
