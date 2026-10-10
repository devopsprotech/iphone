import React, { useState } from 'react';
import { X, Check, Shield, Truck, Package, ArrowRight } from 'lucide-react';
import {
  FINISHES,
  Finish,
  MODELS,
  ModelOption,
  STORAGE_OPTIONS,
  StorageOption,
  TRADE_IN_DEVICES,
  TradeInOption,
} from '../data/productData';

interface ConfiguratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToBag: (item: any) => void;
}

export const ConfiguratorModal: React.FC<ConfiguratorModalProps> = ({
  isOpen,
  onClose,
  onAddToBag,
}) => {
  const [selectedModel, setSelectedModel] = useState<ModelOption>(MODELS[0]);
  const [selectedFinish, setSelectedFinish] = useState<Finish>(FINISHES[0]);
  const [selectedStorage, setSelectedStorage] = useState<StorageOption>(STORAGE_OPTIONS[0]);
  const [selectedTradeIn, setSelectedTradeIn] = useState<TradeInOption>(TRADE_IN_DEVICES[TRADE_IN_DEVICES.length - 1]);
  const [paymentOption, setPaymentOption] = useState<'monthly' | 'full'>('full');
  const [appleCare, setAppleCare] = useState<boolean>(false);
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const basePrice = selectedModel.startingPrice + selectedStorage.priceDelta + (appleCare ? 199 : 0);
  const finalPrice = Math.max(0, basePrice - selectedTradeIn.credit);
  const monthlyCalc = (finalPrice / 24).toFixed(2);

  const handleCompleteOrder = () => {
    onAddToBag({
      model: selectedModel.name,
      finish: selectedFinish.name,
      storage: selectedStorage.size,
      tradeIn: selectedTradeIn.model,
      appleCare,
      price: finalPrice,
      monthly: monthlyCalc,
    });
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 1600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#161617] text-[#f5f5f7] border border-[#333336] rounded-[28px] w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl relative">
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-[#161617]/95 backdrop-blur-md px-6 py-4 border-b border-[#333336] flex items-center justify-between">
          <div>
            <span className="text-[#b64400] text-[11px] font-semibold uppercase tracking-wider">
              Configure Your Device
            </span>
            <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#f5f5f7]">
              Buy {selectedModel.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#333336]/60 hover:bg-[#333336] text-[#86868b] hover:text-[#f5f5f7] transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Step 1: Model Selection */}
          <div>
            <h3 className="text-[17px] font-semibold mb-3">1. Select your model.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MODELS.map((m) => {
                const isSelected = selectedModel.id === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModel(m)}
                    className={`p-5 rounded-[20px] text-left border transition-all ${
                      isSelected
                        ? 'bg-[#000000] border-[#0071e3] ring-1 ring-[#0071e3]'
                        : 'bg-[#0e0e0e] border-[#333336] hover:border-[#6e6e73]'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-[18px] font-semibold text-[#f5f5f7]">
                        {m.name}
                      </span>
                      <span className="text-[13px] text-[#2997ff] font-medium">
                        From ${m.startingPrice}
                      </span>
                    </div>
                    <span className="text-[14px] text-[#86868b] block mt-1">
                      {m.screenSize} Super Retina XDR display
                    </span>
                    <span className="text-[12px] text-[#6e6e73] block mt-2">
                      ProMotion up to 120Hz · Titanium band
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Finish Selection */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-[17px] font-semibold">2. Select your finish.</h3>
              <span className="text-[14px] text-[#86868b]">
                {selectedFinish.name}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {FINISHES.map((f) => {
                const isSelected = selectedFinish.id === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFinish(f)}
                    className={`p-4 rounded-[20px] border flex flex-col items-center text-center transition-all ${
                      isSelected
                        ? 'bg-[#000000] border-[#0071e3] ring-1 ring-[#0071e3]'
                        : 'bg-[#0e0e0e] border-[#333336] hover:border-[#6e6e73]'
                    }`}
                  >
                    <span
                      className="w-8 h-8 rounded-full mb-2.5 shadow-md border border-white/10"
                      style={{ backgroundColor: f.hex }}
                    />
                    <span className="text-[12px] font-medium text-[#f5f5f7] line-clamp-1">
                      {f.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Storage Selection */}
          <div>
            <h3 className="text-[17px] font-semibold mb-3">3. Select your storage.</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STORAGE_OPTIONS.map((s) => {
                const isSelected = selectedStorage.size === s.size;
                return (
                  <button
                    key={s.size}
                    onClick={() => setSelectedStorage(s)}
                    className={`p-4 rounded-[20px] text-center border transition-all ${
                      isSelected
                        ? 'bg-[#000000] border-[#0071e3] ring-1 ring-[#0071e3]'
                        : 'bg-[#0e0e0e] border-[#333336] hover:border-[#6e6e73]'
                    }`}
                  >
                    <span className="text-[20px] font-semibold text-[#f5f5f7] block">
                      {s.size}
                    </span>
                    <span className="text-[12px] text-[#86868b] block mt-1">
                      {s.priceDelta === 0 ? 'Included' : `+$${s.priceDelta}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Apple Trade In */}
          <div className="bg-[#0e0e0e] p-5 rounded-[20px] border border-[#333336]">
            <h3 className="text-[16px] font-semibold mb-2">4. Apple Trade In credit</h3>
            <p className="text-[13px] text-[#86868b] mb-3">
              Trade in your current device for instant credit toward your new iPhone.
            </p>
            <select
              value={selectedTradeIn.model}
              onChange={(e) => {
                const match = TRADE_IN_DEVICES.find((d) => d.model === e.target.value);
                if (match) setSelectedTradeIn(match);
              }}
              className="w-full bg-[#161617] border border-[#333336] text-[#f5f5f7] rounded-[12px] p-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#0071e3]"
            >
              {TRADE_IN_DEVICES.map((d) => (
                <option key={d.model} value={d.model}>
                  {d.model} {d.credit > 0 ? `— Save $${d.credit}` : '— No credit applied'}
                </option>
              ))}
            </select>
          </div>

          {/* Step 5: AppleCare+ option */}
          <div
            onClick={() => setAppleCare(!appleCare)}
            className={`p-5 rounded-[20px] border cursor-pointer flex items-center justify-between transition-all ${
              appleCare
                ? 'bg-[#000000] border-[#0071e3] ring-1 ring-[#0071e3]'
                : 'bg-[#0e0e0e] border-[#333336] hover:border-[#6e6e73]'
            }`}
          >
            <div className="flex items-start gap-3">
              <Shield className={`w-5 h-5 mt-0.5 ${appleCare ? 'text-[#0071e3]' : 'text-[#86868b]'}`} />
              <div>
                <span className="text-[15px] font-semibold text-[#f5f5f7] block">
                  Add AppleCare+ Protection ($199)
                </span>
                <span className="text-[12px] text-[#86868b] block mt-0.5">
                  Unlimited repairs for accidental damage, express replacement, and 24/7 priority tech support.
                </span>
              </div>
            </div>
            <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ${
              appleCare ? 'bg-[#0071e3] border-[#0071e3] text-white' : 'border-[#6e6e73]'
            }`}>
              {appleCare && <Check className="w-3.5 h-3.5" />}
            </div>
          </div>
        </div>

        {/* Modal Footer / Summary */}
        <div className="sticky bottom-0 bg-[#161617]/95 backdrop-blur-md px-6 py-5 border-t border-[#333336] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-[28px] font-bold text-[#f5f5f7]">
                ${finalPrice}
              </span>
              <span className="text-[14px] text-[#86868b]">
                or ${monthlyCalc}/mo. for 24 mo.
              </span>
            </div>
            <p className="text-[12px] text-[#6e6e73]">
              Includes free two-hour delivery or Apple Store pickup · Free returns
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleCompleteOrder}
              disabled={addedSuccess}
              className={`w-full sm:w-auto px-8 py-3 rounded-[170px] text-[14px] font-medium transition-all ${
                addedSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#0071e3] hover:bg-[#0077ed] text-white cursor-pointer active:scale-95'
              }`}
            >
              {addedSuccess ? 'Added to Bag ✓' : 'Add to Bag'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
