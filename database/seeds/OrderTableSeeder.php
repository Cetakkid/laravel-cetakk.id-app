<?php

use Illuminate\Database\Seeder;
use App\Order;

class OrderTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $order1 = Order::create([
            "rangkap" => 2,
            "tinta" => "Hitam putih",
            "jenis_kertas" => "HVS A4",
            "jilid" => "Mika",
            "jasa_antar" => false,
            "takenTime" => 07.00,
            "notes" => "Print yang rapih yaa",
            "agreement" => true
        ]);
        $order1->save();
    }
}
