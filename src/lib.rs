#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

#[napi(object)]
pub struct WeightedMedianData {
    pub weight: f64,
    pub value: f64,
}

impl weighted_median::Data for WeightedMedianData {
    fn get_value(&self) -> f64 {
        self.value
    }

    fn get_weight(&self) -> f64 {
        self.weight
    }

    fn set_weight(&mut self, new_weight: f64) {
        self.weight = new_weight
    }
}

#[napi]
pub fn weighted_median(mut data: Vec<WeightedMedianData>) -> Option<f64> {
    weighted_median::weighted_median(&mut data)
}
